import { Request } from "./request.ts";
import { Response } from "./response.ts";
import { answerChallenge, parseResponses, serializeRequests } from "./utils.ts";
import { throwError } from "./utils.ts";

export class NotInitialized extends Error {}

export interface Session {
  id: string;
  publicHash: string;
  privateHash: string;
  challenge: string;
}

export class BaseClient {
  protected _session?: Session;

  constructor(
    public readonly rpcEndpoint: string,
  ) {
  }

  async getCDNEndpoint(): Promise<string> {
    throw new Error("Not implemented");
  }

  async sessionId() {
    if (!this._session) {
      throw new Error("Session does not exist");
    }

    return {
      session_identification: {
        session_id: this._session.id,
        client_public_hash: this._session.publicHash,
        challenge_answer: await answerChallenge(
          this._session.privateHash,
          this._session.challenge,
        ),
      },
    };
  }

  async invokeRequest(request: Request, includeSessionId?: boolean) {
    if (includeSessionId) {
      request.params = { ...request.params, ...(await this.sessionId()) };
    }

    const result = parseResponses(await this.send(serializeRequests(request)));

    if (result && !Array.isArray(result)) {
      return result.unwrap();
    }

    return {};
  }

  async invokeRequests(...requests: Request[]) {
    if (!requests) {
      throw new Error(
        "The parameter `requests` cannot be `undefined` or empty",
      );
    }

    const toReturn = new Array<Response>();
    const result = parseResponses(
      await this.send(serializeRequests(...requests)),
    );

    if (result) {
      if (Array.isArray(result)) {
        toReturn.push(...result);
      } else {
        toReturn.push(result);
      }
    }

    return toReturn.map((response) => response.unwrap());
  }

  async invokeCDNRequest(data: FormData) {
    return await (await this.sendCDN(data)).json();
  }

  async invokeCDNDownloadRequest(data: FormData, stream?: boolean) {
    const response = (await this.sendCDN(data));

    return stream ? await response.blob() : await response.arrayBuffer();
  }

  async send(data: any) {
    return await (
      await fetch(this.rpcEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json-rpc" },
        body: data,
      })
    ).json();
  }

  async sendCDN(data: FormData) {
    const response = await fetch(await this.getCDNEndpoint(), {
      method: "POST",
      body: data,
    });

    if (response.status != 200) {
      const json = await response.json();

      if (
        typeof json.error_code !== "undefined" &&
        typeof json.message !== "undefined"
      ) {
        throwError(json.error_code, json.message);
      }

      throw new Error(`Got status ${response.status}`);
    }

    return response;
  }
}

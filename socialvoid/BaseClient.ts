import Request from "./Request.ts";
import Response from "./Response.ts";
import { serializeRequests, parseResponses, answerChallenge } from "./utils.ts";
import { throwError } from "./utils.ts";

interface Session {
  id: string;
  publicHash: string;
  privateHash: string;
  challenge: string;
}

export default class BaseClient {
  protected _session?: Session;

  constructor(
    public readonly rpcEndpoint: string,
    public readonly cdnEndpoint: string
  ) {}

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
          this._session.challenge
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
        "The parameter `requests` cannot be `undefined` or empty"
      );
    }

    const toReturn = new Array<Response>();
    const result = parseResponses(
      await this.send(serializeRequests(...requests))
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

  async invokeCDNDownloadRequest(data: FormData) {
    return await (await this.sendCDN(data)).arrayBuffer();
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
    const response = await fetch(this.cdnEndpoint, {
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

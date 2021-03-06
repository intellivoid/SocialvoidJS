// import { crypto } from "https://deno.land/std@0.110.0/crypto/mod.ts";
import { Request } from "./request.ts";
import { Response } from "./response.ts";
import { getRandomValues, jsSHA, OTPAuth } from "./deps.deno.ts";
import map, { SocialvoidError } from "./errors.ts";

export function throwError(code: number, message: string) {
  if (code in map) {
    throw new map[code](code, message);
  }

  throw new SocialvoidError(code, message);
}

export function bufferToHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function answerChallenge(clientPrivateHash: string, challenge: string) {
  const totpCode = new OTPAuth.TOTP({
    algorithm: "sha1",
    digits: 6,
    period: 30,
    secret: challenge,
  }).generate();

  const hash = new jsSHA("SHA-1", "TEXT");
  hash.update(totpCode + clientPrivateHash);
  return hash.getHash("HEX");
}

export const unixTimestampToDate = (unixTimestamp: number) => new Date(unixTimestamp * 1000);

// deno-lint-ignore no-explicit-any
export function parseResponses(body: any): Response | Response[] | undefined {
  if (!body) {
    return undefined;
  }

  if (body.success) {
    return new Response(body);
  }

  return Array.isArray(body)
    ? body
      // deno-lint-ignore no-explicit-any
      .filter((item: any) => "id" in item)
      // deno-lint-ignore no-explicit-any
      .map((item: any) => new Response(item))
    : "id" in body
    ? new Response(body)
    : undefined;
}

export function serializeRequests(...requests: Request[]): string {
  const toReturn: (Request & { jsonrpc: "2.0" })[] = [];

  for (const request of requests) {
    toReturn.push({ ...request, jsonrpc: "2.0" });
  }

  return JSON.stringify(toReturn);
}

export const newHash = () => {
  return bufferToHex(getRandomValues(32));
};

export const formFromObj = (obj: { [key: string]: FormDataEntryValue }) => {
  const form = new FormData();

  for (const i in obj) {
    form.append(i, obj[i]);
  }

  return form;
};

// import { crypto } from "https://deno.land/std@0.110.0/crypto/mod.ts";
import Request from "./Request.ts";
import Response from "./Response.ts";
// @deno-types="https://deno.land/x/otpauth@v7.0.6/dist/otpauth.d.ts"
import * as OTPAuth from "https://deno.land/x/otpauth@v7.0.6/dist/otpauth.esm.js";
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

export async function sha1HexDigest(data: string) {
  return bufferToHex(
    await crypto.subtle.digest("SHA-1", new TextEncoder().encode(data)),
  );
}

export function answerChallenge(clientPrivateHash: string, challenge: string) {
  const totpCode = new OTPAuth.TOTP({
    algorithm: "sha1",
    digits: 6,
    period: 30,
    secret: challenge,
  }).generate();

  return sha1HexDigest(totpCode + clientPrivateHash);
}

export const unixTimestampToDate = (unixTimestamp: number) =>
  new Date(unixTimestamp * 1000);

export function parseResponses(body: any): Response | Response[] | undefined {
  if (!body) {
    return undefined;
  }

  if (body.success) {
    return new Response(body);
  }

  return Array.isArray(body)
    ? body
      .filter((item: any) => "id" in item)
      .map((item: any) => new Response(item))
    : "id" in body
    ? new Response(body)
    : undefined;
}

export function serializeRequests(...requests: Request[]): string {
  const toReturn: any[] = [];

  for (const request of requests) {
    toReturn.push({ ...request, jsonrpc: "2.0" });
  }

  return JSON.stringify(toReturn);
}

export const newHash = () => {
  return bufferToHex(crypto.getRandomValues(new Uint8Array(32)).buffer);
};

export const formFromObj = (obj: { [key: string]: any }) => {
  const form = new FormData();

  for (const i in obj) {
    form.append(i, obj[i]);
  }

  return form;
};

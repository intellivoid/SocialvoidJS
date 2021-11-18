// @deno-types="https://deno.land/x/otpauth@v7.0.6/dist/otpauth.d.ts"
import * as OTPAuth from "https://deno.land/x/otpauth@v7.0.6/dist/otpauth.esm.js";
// @deno-types="https://cdn.jsdelivr.net/npm/jssha@3.2.0/dist/sha.d.ts"
import jsSHA from "https://cdn.jsdelivr.net/npm/jssha@3.2.0/dist/sha.mjs";

export const isBrowser = typeof Deno === "undefined";

export const os = isBrowser ? "Browser" : Deno.build.os;

// deno-lint-ignore no-explicit-any
export const writeTextFileSync = isBrowser ? (..._args: any) => {} : Deno.writeTextFileSync;

// deno-lint-ignore no-explicit-any
export const readTextFileSync = isBrowser ? (..._args: any) => "" : Deno.readTextFileSync;

export const getRandomValues = (size: number) => {
  return crypto.getRandomValues(new Uint8Array(size)).buffer;
};

export { jsSHA, OTPAuth };

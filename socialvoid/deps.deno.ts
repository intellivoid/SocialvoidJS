// @deno-types="https://deno.land/x/otpauth@v7.0.6/dist/otpauth.d.ts"
import * as OTPAuth from "https://deno.land/x/otpauth@v7.0.6/dist/otpauth.esm.js";

export const os = Deno.build.os;
export const isBrowser = typeof Deno === "undefined";
export const writeTextFileSync = Deno.writeTextFileSync;
export const readTextFileSync = Deno.readTextFileSync;

export { OTPAuth };

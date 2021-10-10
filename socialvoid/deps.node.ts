import * as OTPAuth from "otpauth";
export { writeFileSync as writeTextFileSync } from "fs";
import { readFileSync } from "fs";
import { randomBytes } from "crypto";
import jsSHA from "jssha";
import fetch from "node-fetch";

// @ts-ignore
globalThis.fetch = fetch;

export const os = process.platform;

export const isBrowser = typeof window !== "undefined";

export const readTextFileSync = (file: string) => {
  return readFileSync(file).toString();
};

export const getRandomValues = (size: number) => {
  return randomBytes(size).buffer;
};

export { OTPAuth, jsSHA };

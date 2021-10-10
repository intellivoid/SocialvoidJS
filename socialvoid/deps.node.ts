import * as OTPAuth from "otpauth";
export { writeFileSync as writeTextFileSync } from "fs";
import { readFileSync } from "fs";

export const os = process.platform;
export const isBrowser = typeof window !== "undefined";
export const readTextFileSync = (file: string) => {
  return readFileSync(file).toString();
};

export { OTPAuth };

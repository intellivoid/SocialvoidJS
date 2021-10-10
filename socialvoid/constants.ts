import { os, isBrowser } from "./deps.deno.ts";

export const IS_BROWSER = isBrowser;
export const NAME = "SocialvoidJS";
export const VERSION = "0.0.1";
export const PLATFORM = IS_BROWSER ? "Browser" : os || "Unknown";

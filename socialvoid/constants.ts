export const IS_BROWSER = typeof Deno === "undefined";
export const NAME = "SocialvoidJS";
export const VERSION = "0.0.1";
export const PLATFORM = IS_BROWSER ? "Browser" : Deno.build.os || "Unknown";

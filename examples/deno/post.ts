import { client, login } from "./mod.ts";

await login();

const a = await client.timeline.retrieveFeed();
console.log(a);

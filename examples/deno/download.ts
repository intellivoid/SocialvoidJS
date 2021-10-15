import { client, login } from "./mod.ts";

await login();

const id = prompt("ID of the document to be downloaded:")!;
const data = (await client.cdn.download(id)) as ArrayBuffer;

await Deno.writeFile(id, new Uint8Array(data));
console.log("Downloaded successfully.");

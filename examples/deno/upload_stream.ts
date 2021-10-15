import { readableStreamFromReader } from "https://deno.land/std@0.111.0/streams/conversion.ts";
import { client, login } from "./mod.ts";

await login();

const file = prompt("Path of the file to be uploaded:")!;
const blob = await new Response(readableStreamFromReader(await Deno.open(file))).blob();

const document = await client.cdn.upload(blob);

console.log("Uploaded successfully.");
console.log("Document ID:", document.id);

import { writableStreamFromWriter } from "https://deno.land/std@0.111.0/streams/conversion.ts";
import { client, login } from "./mod.ts";

await login();

const id = prompt("ID of the document to be downloaded:")!;
const result = (await client.cdn.download(id, true)) as Blob;

const writer = await Deno.open(id, { create: true, write: true });
const writeStream = writableStreamFromWriter(writer);

result.stream().pipeTo(writeStream);
console.log("Downloaded successfully.");

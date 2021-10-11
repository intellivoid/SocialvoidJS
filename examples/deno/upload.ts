import { client, login } from "./mod.ts";

await login();

const file = prompt("Path of the file to be uploaded:")!;
const blob = new Blob([await Deno.readFile(file)]);

const document = await client.cdn.upload(blob);

console.log("Uploaded successfully.");
console.log("Document ID:", document.id);

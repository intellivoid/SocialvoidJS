const { createReadStream } = require("fs");
const { client, login, prompt } = require("./");

(async () => {
  await login();

  const file = prompt("Path of the file to be uploaded:");
  const document = await client.cdn.upload(createReadStream(file));

  console.log("Uploaded successfully.");
  console.log("Document ID:", document.id);
})();

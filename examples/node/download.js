const { writeFileSync } = require("fs");
const { client, login, prompt } = require("./");

(async () => {
    await login();

    const id = prompt("ID of the document to be downloaded:");
    const data = await client.cdn.download(id);

    writeFileSync(id, new Uint8Array(data));

    console.log("Downloaded successfully.");
})();

const { createInterface } = require("readline");
const { Client } = require("../../dist/mod.js");

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const client = new Client();

function prompt(query) {
  return new Promise((resolve) => {
    readline.question(query + " ", resolve);
  });
}

async function login() {
  if (!client.sessionExists) {
    await client.newSession();
  }

  const session = await client.session.get();

  if (!session.authenticated) {
    await client.session.authenticateUser(
      prompt("Username:"),
      prompt("Password:"),
      prompt("OTP (if set):")
    );
  }
}

module.exports = { client, login, prompt };

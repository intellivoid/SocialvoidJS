import { Client } from "../../socialvoid/mod.ts";

const client = new Client();

(async () => {
  if (!client.sessionExists) {
    await client.newSession();
  }

  const session = await client.session.get();

  if (!session.authenticated) {
    await client.session.authenticateUser(
      prompt("Username:")!,
      prompt("Password:")!,
      prompt("OTP (if set):")!,
    );
  }

  const me = await client.network.getMe();
  console.log("Logged in as", me.name + ".");
  console.log(`${me.name}’s username is`, me.username + ".");
  console.log(`@${me.username}’s ID is`, me.id + ".");
})();

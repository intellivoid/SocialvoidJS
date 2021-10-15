import { Client } from "../../socialvoid/mod.ts";

export const client = new Client();

export async function login() {
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
}

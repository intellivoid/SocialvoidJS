const { client, login } = require("./");

(async () => {
    await login();
    const me = await client.network.getMe();

    console.log("Logged in as", me.name + ".");
    console.log(`${me.name}’s username is`, me.username + ".");
    console.log(`@${me.username}’s ID is`, me.id + ".");
})();

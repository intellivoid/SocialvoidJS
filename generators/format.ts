export const format = () =>
    Deno.run({
        cmd: ["deno", "fmt", "--config", "deno.json"],
        cwd: "../socialvoid",
        stdout: "piped",
    }).output();

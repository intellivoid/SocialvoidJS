export const format = () =>
    Deno.run({
        cmd: ["deno", "fmt", "--config", "deno.json"],
        cwd: "../",
        stdout: "piped",
    }).output();

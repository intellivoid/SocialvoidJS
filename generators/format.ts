export const format = () =>
    Deno.run({
        cmd: ["deno", "fmt"],
        cwd: "../socialvoid",
        stdout: "piped",
    }).output();

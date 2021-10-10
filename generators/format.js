"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
var format = function () {
    return Deno.run({
        cmd: ["deno", "fmt"],
        cwd: "../socialvoid",
        stdout: "piped",
    }).output();
};
exports.format = format;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format_js_1 = require("./format.js");
var errors = JSON.parse(Deno.readTextFileSync("./data/errors.json"));
var map = {};
var code = "\nexport class SocialvoidError extends Error {\n    message: string;\n      \n    constructor(public errorCode: number, public errorMessage: string) {\n        super();\n        this.message = `Error ${errorCode}: ${errorMessage}`;\n    }\n}\n";
for (var group in errors) {
    var groupName = group.charAt(0).toUpperCase() + group.slice(1) + "Error";
    code += "\nexport class " + groupName + " extends SocialvoidError {}\n\n";
    for (var errorCode in errors[group]) {
        var errorType = errors[group][errorCode]._;
        map[errorCode] = errorType;
        code += "export class " + errorType + " extends " + groupName + " {}\n\n";
    }
}
code += "const map: {[key: string]: typeof SocialvoidError} = ";
code += JSON.stringify(map)
    .replaceAll('":"', '":')
    .replaceAll('",', ",")
    .replace('"}', "}");
code += ";\n\n";
code += "export default map;";
Deno.writeTextFileSync("../socialvoid/errors.ts", code);
await (0, format_js_1.format)();

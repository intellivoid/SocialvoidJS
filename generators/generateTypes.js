"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format_js_1 = require("./format.js");
var objs = JSON.parse(Deno.readTextFileSync("./data/types.json"));
var code = "\nexport class TypeBase {\n    static fromObject: (obj: any) => TypeBase;\n}\n";
var toCamel = function (s) {
    return s.replace(/([-_][a-z])/gi, function ($1) {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
};
for (var obj in objs) {
    code += "\n  export class " + obj + " extends TypeBase{\n      constructor(\n  ";
    for (var param in objs[obj]) {
        code += "public " + toCamel(param) + ": " + objs[obj][param].type + ",";
    }
    code += ") {super()}\n\n ";
    code += "static fromObject(obj: any) {";
    code += "return new this(";
    for (var param in objs[obj]) {
        code += "obj." + param + ",";
    }
    code += ")}}\n\n";
}
Deno.writeTextFileSync("../socialvoid/types.ts", code);
await (0, format_js_1.format)();

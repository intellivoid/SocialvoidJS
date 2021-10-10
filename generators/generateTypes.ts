import { format } from "./format.ts";

interface Param {
  type: string;
  description: string;
}

type Obj = { [key: string]: Param };

type Objs = { [key: string]: Obj };

const objs: Objs = JSON.parse(Deno.readTextFileSync("./data/types.json"));

let code = `
export class TypeBase {
    static fromObject: (obj: any) => TypeBase;
}
`;
const toCamel = (s: string) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

for (const obj in objs) {
  code += `
  export class ${obj} extends TypeBase{
      constructor(
  `;

  for (const param in objs[obj]) {
    code += `public ${toCamel(param)}: ${objs[obj][param].type},`;
  }

  code += ") {super()}\n\n ";

  code += "static fromObject(obj: any) {";
  code += "return new this(";
  for (const param in objs[obj]) {
    code += `obj.${param},`;
  }

  code += ")}}\n\n";
}

Deno.writeTextFileSync("../socialvoid/types.ts", code);
await format();

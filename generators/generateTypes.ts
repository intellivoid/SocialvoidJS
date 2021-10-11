import { format } from "./format.ts";

interface Param {
  type: string;
  description: string;
  is_date?: boolean;
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
  if (obj == "_") {
    for (const t in objs[obj]) {
      code += `export type ${t} = ${objs[obj][t]}\n\n`;
    }

    continue;
  }

  code += `
  export class ${obj} extends TypeBase{
      constructor(
  `;

  for (const param in objs[obj]) {
    code += `public ${toCamel(param)}: ${
      objs[obj][param].is_date ? "Date" : objs[obj][param].type
    },`;
  }

  code += ") {super()}\n\n ";

  code += "static fromObject(obj: any) {";
  code += "return new this(";
  for (const param in objs[obj]) {
    if (objs[obj][param].is_date) {
      code += `new Date(obj.${param} * 1000),`;
    } else {
      code += `obj.${param},`;
    }
  }

  code += ")}}\n\n";
}

Deno.writeTextFileSync("../socialvoid/types.ts", code);
await format();

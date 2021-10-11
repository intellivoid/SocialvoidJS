import { toCamel } from "./helpers.ts";
import { format } from "./format.ts";

interface TypeParams {
  type: string;
  description: string;
  is_date?: boolean;
}

type Type = { [key: string]: TypeParams };

type Types = { [key: string]: Type };

const types: Types = JSON.parse(
  Deno.readTextFileSync("./data/types.json"),
);

let code = `
export class TypeBase {
    static fromObject: (obj: any) => TypeBase;
}

`;

for (const i in types) {
  const name = i;
  const params = types[name];

  if (name == "_") {
    for (const param in params) {
      code += `export type ${param} = ${params[param]}\n\n`;
    }

    continue;
  }

  code += `
  export class ${name} extends TypeBase{
      constructor(
  `;

  for (const param in params) {
    code += `public ${toCamel(param)}: ${
      params[param].is_date ? "Date" : params[param].type
    },`;
  }

  code += ") {super()}\n\n ";

  code += "static fromObject(obj: any) {";
  code += "return new this(";

  for (const param in params) {
    if (params[param].is_date) {
      code += `new Date(obj.${param} * 1000),`;
    } else if (params[param].type in types) {
      code += `${params[param].type}.fromObject(obj.${param}),`;
    } else if (params[param].type.replace("[]", "") in types) {
      code += `obj.${param}.map((obj: any) => ${
        params[param].type.replace("[]", "")
      }.fromObject(obj))`;
    } else {
      code += `obj.${param},`;
    }
  }

  code += ")}}\n\n";
}

await Deno.writeTextFile("../socialvoid/types.ts", code);
await format();

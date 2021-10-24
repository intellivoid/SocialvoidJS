import { toCamel } from "./helpers.ts";
import { format } from "./format.ts";

interface TypeParams {
    type: string;
    description: string;
    date?: boolean;
    nullable?: boolean;
}

type Type = { [key: string]: TypeParams };

type Types = {
    types: { [key: string]: string };
    interfaces: { [key: string]: Type };
};

const types: Types = JSON.parse(
    Deno.readTextFileSync("./data/types.json"),
);

let code = ``;

for (const name in types.types) {
    const type = types.types[name];

    code += `export type ${name} = ${type};\n\n`;
}

for (const name in types.interfaces) {
    const params = types.interfaces[name];

    code += `export interface ${name} {`;

    for (const name in params) {
        const param = params[name];
        code += `\n/** ${param.description} */\n`;
        code += `${name}: ${param.type}`;

        if (param.nullable) {
            code += " | null";
        }

        code += ";";
    }

    code += "}\n\n";
}

await Deno.writeTextFile("../socialvoid/types.ts", code);
await format();

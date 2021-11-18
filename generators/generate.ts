import { format } from "./utils.ts";

interface SocialvoidError {
  id: string;
  name: string;
  description: string;
  error_code: number;
}

interface SocialvoidType {
  id: string;
  name: string;
  description: string;
  parameters: {
    name: string;
    types: { type: string; vector: boolean }[];
    required: boolean;
    description: string;
  }[];
}

const { errors, objects: types }: {
  errors: SocialvoidError[];
  objects: SocialvoidType[];
} = JSON.parse(await Deno.readTextFile("data.json"));

//

let errs = "";

errs += `export class SocialvoidError extends Error {
  message: string;
    
  constructor(public errorCode: number, public errorMessage: string) {
      super();
      this.message = \`Error \${errorCode}: \${errorMessage}\`;
  }
}\n\n`;

for (const err of errors) {
  errs += `// ${err.description}\n`;
  errs += `export class ${err.name} extends SocialvoidError {}\n\n`;
}

errs += "const map: {[key: string]: typeof SocialvoidError}  = {";

for (const err of errors) {
  errs += `"${err.error_code}": ${err.name},`;
}

errs += "};\n\n";

errs += "export default map";

//

let typs = "";

for (const typ of types) {
  typs += `// ${typ.description}\n`;
  typs += `export interface ${typ.name} {\n`;

  for (const param of typ.parameters) {
    typs += `// ${param.description}\n`;
    typs += `"${param.name}"`;

    if (!param.required) {
      typs += "?";
    }

    typs += ": ";
    typs += param.types.map((param) =>
      param.type == "integer" ? "number" : param.type + (param.vector ? "[]" : "")
    ).join(" | ");
    typs += ";\n";
  }

  typs += "}\n\n";
}

//

await Deno.writeTextFile("../socialvoid/errors.ts", errs);
await Deno.writeTextFile("../socialvoid/types.ts", typs);
await format();

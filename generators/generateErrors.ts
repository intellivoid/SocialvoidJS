interface Errorr {
  _: string;
  description: string;
}

type ErrorGroup = { [key: string]: Errorr };

type Errors = { [key: string]: ErrorGroup };

const errors: Errors = JSON.parse(Deno.readTextFileSync("./data/errors.json"));

let map: { [key: string]: string } = {};

let code = `
export class SocialvoidError extends Error {
    message: string;
      
    constructor(public errorCode: number, public errorMessage: string) {
        super();
        this.message = \`Error \${errorCode}: \${errorMessage}\`;
    }
}
`;

for (const group in errors) {
  const groupName = group.charAt(0).toUpperCase() + group.slice(1) + "Error";
  code += `
export class ${groupName} extends SocialvoidError {}

`;

  for (const errorCode in errors[group]) {
    const errorType = errors[group][errorCode]._;
    map[errorCode] = errorType;

    code += `export class ${errorType} extends ${groupName} {}\n\n`;
  }
}

code += "const map: {[key: string]: typeof SocialvoidError} = ";
code += JSON.stringify(map)
  .replaceAll('":"', '":')
  .replaceAll('",', ",")
  .replace('"}', "}");

code += ";\n\n";
code += "export default map;";

Deno.writeTextFileSync("errors.ts", code);

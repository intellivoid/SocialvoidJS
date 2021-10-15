import { format } from "./format.ts";

interface Error {
    _: string;
    description: string;
}

type ErrorGroup = { [key: string]: Error };

type ErrorGroups = { [key: string]: ErrorGroup };

const errorGroups: ErrorGroups = JSON.parse(
    Deno.readTextFileSync("./data/errors.json"),
);

let map: { [key: string]: string } = {};

let toWrite = `
export class SocialvoidError extends Error {
    message: string;
      
    constructor(public errorCode: number, public errorMessage: string) {
        super();
        this.message = \`Error \${errorCode}: \${errorMessage}\`;
    }
}
`;

for (const i in errorGroups) {
    const name = i.charAt(0).toUpperCase() + i.slice(1) + "Error";
    const errorGroup = errorGroups[i];

    toWrite += `
export class ${name} extends SocialvoidError {}

`;

    for (const i in errorGroup) {
        const code = i;
        const type = errorGroup[code]._;
        map[code] = type;
        toWrite += `export class ${type} extends ${name} {}\n\n`;
    }
}

toWrite += "const map: {[key: string]: typeof SocialvoidError} = ";
toWrite += JSON.stringify(map)
    .replaceAll('":"', '":')
    .replaceAll('",', ",")
    .replace('"}', "}");

toWrite += ";\n\n";
toWrite += "export default map;";

await Deno.writeTextFile("../socialvoid/errors.ts", toWrite);
await format();

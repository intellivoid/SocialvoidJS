import { IS_BROWSER } from "../constants.ts";
import Store from "./Store.ts";

export default class FileStore extends Store {
  data: { [key: string]: any };

  constructor(public readonly file: string) {
    super();

    if (IS_BROWSER) {
      throw new Error("Cannot use `FileStore` on browsers");
    }

    this.file = this.file + ".json";

    try {
      this.data = JSON.parse(Deno.readTextFileSync(this.file));
    } catch (_) {
      this.data = {};
    }
  }

  set(key: string, value: any) {
    this.data[key] = value;
  }

  get(key: string) {
    return this.data[key];
  }

  save() {
    Deno.writeTextFileSync(this.file, JSON.stringify(this.data));
  }

  delete(key: string) {
    this.data[key] = undefined;
  }
}

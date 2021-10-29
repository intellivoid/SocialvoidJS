import { throwError } from "./utils.ts";

export class Response {
  id: number;
  success: boolean;
  error?: { code: number; message: string };

  constructor(public data: any) {
    if (!this.data.id) {
      throw new Error(`Got invalid data: ${data}`);
    }

    this.id = data.id;
    this.success = !("error" in data);
    this.data = data.result;
    this.error = data.error;
  }

  unwrap() {
    if (this.success) {
      return this.data;
    }

    if (this.error) {
      throwError(this.error.code, this.error.message);
    }

    return undefined;
  }
}

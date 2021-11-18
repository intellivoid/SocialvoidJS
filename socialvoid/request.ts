export class Request {
  id?: string;

  constructor(
    public method: string,
    // deno-lint-ignore no-explicit-any
    public params?: any,
    public notification = false,
  ) {
    this.id = notification ? undefined : String(Date.now());
  }
}

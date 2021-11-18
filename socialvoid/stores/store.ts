export abstract class Store {
  // deno-lint-ignore no-explicit-any
  abstract set(key: string, value: any): void;
  // deno-lint-ignore no-explicit-any
  abstract get(key: string): any;
  abstract delete(key: string): void;
  abstract save(): void;
}

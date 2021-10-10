import Store from "./Store.js";
export default class MemoryStore extends Store {
    private data;
    constructor();
    set(key: string, value: any): void;
    get(key: string): any;
    save(): void;
    delete(key: string): void;
}

import Store from "./Store.js";
export default class LocalStorageStore extends Store {
    private id;
    constructor(id?: string);
    private resolveKey;
    set(key: string, value: any): void;
    get(key: string): any;
    save(): void;
    delete(key: string): void;
}

import Store from "./Store.js";
export default class FileStore extends Store {
    readonly file: string;
    data: {
        [key: string]: any;
    };
    constructor(file: string);
    set(key: string, value: any): void;
    get(key: string): any;
    save(): void;
    delete(key: string): void;
}

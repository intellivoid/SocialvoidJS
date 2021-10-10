import Store from "./Store.js";
import FileStore from "./FileStore.js";
import MemoryStore from "./MemoryStore.js";
import LocalStorageStore from "./LocalStorageStore.js";
export declare type Memory = ":memory:";
export declare type FileName = string;
export declare type LocalStorageKey = string;
export { FileStore, LocalStorageStore, MemoryStore, Store };

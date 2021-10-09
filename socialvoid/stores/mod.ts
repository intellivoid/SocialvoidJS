import Store from "./Store.ts";
import FileStore from "./FileStore.ts";
import MemoryStore from "./MemoryStore.ts";
import LocalStorageStore from "./LocalStorageStore.ts";

export type Memory = ":memory:";
export type FileName = string;
export type LocalStorageKey = string;

export { FileStore, LocalStorageStore, MemoryStore, Store };

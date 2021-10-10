import { FileName, LocalStorageKey, Memory, Store } from "./stores/mod.js";
import { Account, CDN, Cloud, Help, Network, Session } from "./methods/mod.js";
import BaseClient from "./BaseClient.js";
export default class Client extends BaseClient {
    help: Help;
    cloud: Cloud;
    network: Network;
    session: Session;
    account: Account;
    cdn: CDN;
    private store;
    constructor(store?: Memory | FileName | LocalStorageKey | Store, rpcEndpoint?: string, cdnEndpoint?: string);
    newSession(): Promise<void>;
    deleteSession(): void;
    get sessionExists(): boolean;
}

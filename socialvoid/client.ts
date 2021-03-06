import { IS_BROWSER } from "./constants.ts";
import {
  FileName,
  FileStore,
  LocalStorageKey,
  LocalStorageStore,
  Memory,
  MemoryStore,
  Store,
} from "./stores/mod.ts";
import { Account, CDN, Cloud, Help, Network, Session, Timeline } from "./methods/mod.ts";
import { BaseClient } from "./base_client.ts";
import { newHash } from "./utils.ts";

export class Client extends BaseClient {
  help = new Help(this);
  cloud = new Cloud(this);
  network = new Network(this);
  session = new Session(this);
  account = new Account(this);
  cdn = new CDN(this);
  timeline = new Timeline(this);

  private store: Store;

  constructor(
    store: Memory | FileName | LocalStorageKey | Store = "main",
    rpcEndpoint = "http://socialvoid.qlg1.com:5601",
    public customCDNEndpoint?: string,
  ) {
    super(rpcEndpoint);

    this.store = typeof store === "undefined"
      ? new MemoryStore()
      : typeof store === "string"
      ? store == ":memory:"
        ? new MemoryStore()
        : IS_BROWSER
        ? new LocalStorageStore(store)
        : new FileStore(store)
      : store;

    const session = this.store.get("session");

    if (session) {
      this._session = session;
    }

    this.network = new Network(this);
    this.help = new Help(this);
    this.cloud = new Cloud(this);
  }

  async getCDNEndpoint(): Promise<string> {
    if (this.customCDNEndpoint) {
      return this.customCDNEndpoint;
    }

    return (await this.help.getServerInformation()).cdn_server;
  }

  async newSession() {
    if (this._session) {
      return;
    }

    const publicHash = newHash();
    const privateHash = newHash();

    const session = await this.session.create(publicHash, privateHash);
    this._session = {
      publicHash,
      privateHash,
      id: session.id,
      challenge: session.challenge,
    };
    this.store.set("session", this._session);
    this.store.save();
  }

  deleteSession() {
    this._session = undefined;
    this.store.delete("session");
    this.store.save();
  }

  get sessionExists() {
    return this._session != undefined;
  }
}

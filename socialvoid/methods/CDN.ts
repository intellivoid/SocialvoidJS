import { Document } from "../types/mod.ts";
import { formFromObj } from "../utils.ts";
import MethodBase from "./MethodBase.ts";

export default class CDN extends MethodBase {
  async upload(document: any) {
    const form = formFromObj({
      action: "upload",
      document,
      ...(await this.client.sessionId()).session_identification,
    });

    return Document.fromObject(
      (await this.client.invokeCDNRequest(form)).results,
    );
  }

  async download(document: string | Document) {
    const form = formFromObj({
      action: "download",
      document: document instanceof Document ? document.id : document,
      ...(await this.client.sessionId()).session_identification,
    });

    return this.client.invokeCDNDownloadRequest(form);
  }

  async streamDownload(document: string | Document) {
    const form = formFromObj({
      action: "download",
      document: document instanceof Document ? document.id : document,
      ...(await this.client.sessionId()).session_identification,
    });

    return this.client.invokeCDNRequest(form);
  }
}

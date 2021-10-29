import { Document } from "../types.ts";
import { formFromObj } from "../utils.ts";
import { MethodBase } from "./method_base.ts";

export class CDN extends MethodBase {
  /**
   * Uploads a file.
   *
   * @param document The file, it can be a buffer or a readable stream.
   */
  async upload(document: any): Promise<Document> {
    const form = formFromObj({
      action: "upload",
      document,
      ...(await this.client.sessionId()).session_identification,
    });

    return (await this.client.invokeCDNRequest(form)).results;
  }

  /**
   * Downloads the provided document.
   *
   * @param document The ID or instance of the document.
   * @param stream Wheather to download and returns its data or stream it, returning a `Blob`.
   */
  async download(document: string | Document, stream?: boolean) {
    const form = formFromObj({
      action: "download",
      document: typeof document == "string" ? document : document.id,
      ...(await this.client.sessionId()).session_identification,
    });

    return this.client.invokeCDNDownloadRequest(form, stream);
  }
}

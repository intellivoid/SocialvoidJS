import { Document } from "../types.ts";
import MethodBase from "./MethodBase.ts";
import Request from "../Request.ts";

export default class Cloud extends MethodBase {
  /**
   * Gets a document using its ID or instance.
   */
  async getDocument(document: string | Document) {
    document = document instanceof Document ? document.id : document;

    return Document.fromObject(
      await this.client.invokeRequest(
        new Request("cloud.get_document", {
          document,
        }),
        true
      )
    );
  }
}

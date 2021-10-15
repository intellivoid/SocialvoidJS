import { Document } from "../types.ts";
import MethodBase from "./MethodBase.ts";
import Request from "../Request.ts";

export default class Cloud extends MethodBase {
    /**
     * Gets a document using its ID or instance.
     */
    getDocument(document: string | Document): Promise<Document> {
        document = typeof document == "string" ? document : document.id;

        return this.client.invokeRequest(
            new Request("cloud.get_document", {
                document,
            }),
            true,
        );
    }
}

import { Document } from "../types.ts";
import { MethodBase } from "./method_base.ts";
import { Request } from "../request.ts";

export class Cloud extends MethodBase {
    /**
     * Resolves a document.
     *
     * @param document The ID or instance of the document.
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

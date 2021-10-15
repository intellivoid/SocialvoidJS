import { Document } from "../types.ts";
import { formFromObj } from "../utils.ts";
import { MethodBase } from "./method_base.ts";

export class CDN extends MethodBase {
    async upload(document: any): Promise<Document> {
        const form = formFromObj({
            action: "upload",
            document,
            ...(await this.client.sessionId()).session_identification,
        });

        return (await this.client.invokeCDNRequest(form)).results;
    }

    async download(document: string | Document) {
        const form = formFromObj({
            action: "download",
            document: typeof document == "string" ? document : document.id,
            ...(await this.client.sessionId()).session_identification,
        });

        return this.client.invokeCDNDownloadRequest(form);
    }

    async streamDownload(document: string | Document) {
        const form = formFromObj({
            action: "download",
            document: typeof document == "string" ? document : document.id,
            ...(await this.client.sessionId()).session_identification,
        });

        return this.client.invokeCDNRequest(form);
    }
}

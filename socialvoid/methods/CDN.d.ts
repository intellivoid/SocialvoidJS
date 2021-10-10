import { Document } from "../types.js";
import MethodBase from "./MethodBase.js";
export default class CDN extends MethodBase {
    upload(document: any): Promise<Document>;
    download(document: string | Document): Promise<ArrayBuffer>;
    streamDownload(document: string | Document): Promise<any>;
}

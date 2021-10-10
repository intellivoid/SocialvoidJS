import { Document } from "../types.js";
import MethodBase from "./MethodBase.js";
export default class Cloud extends MethodBase {
    /**
     * Gets a document using its ID or instance.
     */
    getDocument(document: string | Document): Promise<Document>;
}

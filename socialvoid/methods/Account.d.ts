import { Document } from "../types.js";
import MethodBase from "./MethodBase.js";
export default class Account extends MethodBase {
    /**
     * Removes the profile picture of the currently logged in account.
     */
    deleteProfilePicture(): Promise<any>;
    /**
     * Sets the profile picture of the currently logged in account.
     *
     * @param document The document ID or instance of the profile picture.
     */
    setProfilePicture(document: string | Document): Promise<any>;
}

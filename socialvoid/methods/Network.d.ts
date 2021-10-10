import { Peer } from "../types.js";
import MethodBase from "./MethodBase.js";
export default class Network extends MethodBase {
    /**
     * Gets the peer of the currently logged in account.
     */
    getMe(): Promise<Peer>;
}

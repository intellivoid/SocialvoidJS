import { Request } from "../request.ts";
import { Peer } from "../types.ts";
import { MethodBase } from "./method_base.ts";

export class Network extends MethodBase {
    /**
     * Gets the peer of the currently logged in account.
     */
    getMe(): Promise<Peer> {
        return this.client.invokeRequest(new Request("network.get_me"), true);
    }
}

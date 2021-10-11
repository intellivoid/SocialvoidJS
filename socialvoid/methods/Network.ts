import Request from "../Request.ts";
import { Peer } from "../types.ts";
import MethodBase from "./MethodBase.ts";

export default class Network extends MethodBase {
  /**
   * Gets the peer of the currently logged in account.
   */
  getMe(): Promise<Peer> {
    return this.client.invokeRequest(new Request("network.get_me"), true);
  }
}

import { Request } from "../request.ts";
import { Peer, Profile } from "../types.ts";
import { MethodBase } from "./method_base.ts";

export class Network extends MethodBase {
  /**
   * Gets the peer of the currently logged in account.
   */
  getMe(): Promise<Peer> {
    return this.client.invokeRequest(new Request("network.get_me"), true);
  }

  /**
   * Gets the profile of a peer using its instance or ID.
   *
   * @param peer The ID, handle (with a leading @) or instance of the peer. The default value is the authenticated user.
   */
  getProfile(peer?: string | Peer): Promise<Profile> {
    return this.client.invokeRequest(
      new Request("network.get_profile", {
        peer: typeof peer !== "undefined" ? typeof peer == "string" ? peer : peer.id : undefined,
      }),
      true,
    );
  }

  /**
   * Returns an array of peers who follow the given peer.
   *
   * @param peer The ID, handle (with a leading @) or instance of the peer. The default value is the authenticated user.
   * @param page The current page number of the return results. The default value is `1`.
   */
  getFollowing(peer?: string | Peer, page?: number): Promise<Peer[]> {
    return this.client.invokeRequest(
      new Request("network.get_following", {
        peer: typeof peer !== "undefined" ? typeof peer == "string" ? peer : peer.id : undefined,
        page,
      }),
      true,
    );
  }

  /**
   * Returns an array of peers who follow the given peer.
   *
   * @param peer The ID, handle (with a leading @) or instance of the peer. The default value is the authenticated user.
   * @param page The current page number of the return results. The default value is `1`.
   */
  getFollowers(peer?: string | Peer, page?: number): Promise<Peer[]> {
    return this.client.invokeRequest(
      new Request("network.get_followers", {
        peer: typeof peer !== "undefined" ? typeof peer == "string" ? peer : peer.id : undefined,
        page,
      }),
      true,
    );
  }

  /**
   * Follows another peer on the network.
   *
   * @param peer The ID, handle (with a leading @) or instance of the peer to follow.
   */
  followPeer(peer: string | Peer): Promise<string> {
    return this.client.invokeRequest(
      new Request("network.follow_peer", {
        peer: typeof peer == "string" ? peer : peer.id,
      }),
      true,
    );
  }

  /**
   * Unfollows another peer on the network.
   *
   * @param peer The ID, handle (with a leading @) or instance of the peer to unfollow.
   */
  unfollowPeer(peer: string | Peer): Promise<string> { // TODO: RelationshipType
    return this.client.invokeRequest(
      new Request("network.unfollow_peer", {
        peer: typeof peer == "string" ? peer : peer.id,
      }),
      true,
    );
  }
}

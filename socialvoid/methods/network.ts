import { Request } from "../request.ts";
import { Peer, Profile, RelationshipType } from "../types.ts";
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
     */
    getProfile(peer?: string | Peer): Promise<Profile> {
        return this.client.invokeRequest(
            new Request("network.get_profile", {
                peer: typeof peer !== "undefined"
                    ? typeof peer == "string" ? peer : peer.id
                    : undefined,
            }),
            true,
        );
    }

    /**
     * Returns an array of peers that the requested peer is following.
     */
    getFollowing(peer?: string | Peer, cursor?: number): Promise<Peer[]> {
        return this.client.invokeRequest(
            new Request("network.get_following", {
                peer: typeof peer !== "undefined"
                    ? typeof peer == "string" ? peer : peer.id
                    : undefined,
                cursor,
            }),
            true,
        );
    }

    /**
     * Returns an array of peers who follow the given peer.
     */
    getFollowers(peer?: string | Peer, cursor?: number): Promise<Peer[]> {
        return this.client.invokeRequest(
            new Request("network.get_followers", {
                peer: typeof peer !== "undefined"
                    ? typeof peer == "string" ? peer : peer.id
                    : undefined,
                cursor,
            }),
            true,
        );
    }

    /**
     * Follows another peer on the network.
     */
    followPeer(peer: string | Peer): Promise<RelationshipType> {
        return this.client.invokeRequest(
            new Request("network.follow_peer", {
                peer: typeof peer == "string" ? peer : peer.id,
            }),
            true,
        );
    }

    /**
     * Unfollows another peer on the network.
     */
    unfollowPeer(peer: string | Peer): Promise<RelationshipType> {
        return this.client.invokeRequest(
            new Request("network.unfollow_peer", {
                peer: typeof peer == "string" ? peer : peer.id,
            }),
            true,
        );
    }
}

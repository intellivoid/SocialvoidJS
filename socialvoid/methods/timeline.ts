import { Request } from "../request.ts";
import { Document, Peer, Post } from "../types.ts";
import { MethodBase } from "./method_base.ts";

export class Timeline extends MethodBase {
  /**
   * Composes a new post to push to the timeline.
   *
   * @param text The text contents of the post that is to be composed.
   * @param attachments An array of Document ID or instances to be attached to the post.
   */
  compose(text: string, attachments?: (string | Document)[]): Promise<Post> {
    return this.client.invokeRequest(
      new Request("timeline.compose", {
        text,
        attachments: typeof attachments !== "undefined"
          ? attachments.map((attachment) => {
            if (typeof attachment === "string") {
              return attachment;
            }

            return attachment.id;
          })
          : undefined,
      }),
      true,
    );
  }

  /**
   * Deletes an existing post from the timeline.
   *
   * @param post The ID or instance of the post to be deleted.
   */
  delete(post: string | Post): Promise<boolean> {
    return this.client.invokeRequest(
      new Request("timeline.delete", {
        post: typeof post === "string" ? post : post.id,
      }),
      true,
    );
  }

  /**
   * Returns the peers that liked the requested post.
   *
   * @param post The post ID or instance to get likes from.
   * @param page The requested page number, by default the value is 1.
   */
  getLikes(post: string | Post, page?: number): Promise<Peer[]> {
    return this.client.invokeRequest(
      new Request("timeline.get_likes", {
        post: typeof post === "string" ? post : post.id,
        page,
      }),
      true,
    );
  }

  /**
   * Retrieves an existing post from the timeline.
   *
   * @param post The Post ID to retrieve from the timeline.
   */
  getPost(post: string): Promise<Post> {
    return this.client.invokeRequest(
      new Request("timeline.get_post", {
        post,
      }),
      true,
    );
  }

  /**
   * Returns an array of post quotes for the selected post.
   *
   * @param post The Post ID or instance to retrieve quotes from.
   * @param page The requested page number, by default the value is 1.
   */
  getQuotes(post: string | Post, page?: number): Promise<Post[]> {
    return this.client.invokeRequest(
      new Request("timeline.get_quotes", {
        post: typeof post === "string" ? post : post.id,
        page,
      }),
      true,
    );
  }

  /**
   * Returns an array of posts that replied to the selected post.
   *
   * @param post The Post ID or instance to retrieve replies from.
   * @param page The requested page number, by default the value is 1.
   */
  getReplies(post: string | Post, page?: number): Promise<Post[]> {
    return this.client.invokeRequest(
      new Request("timeline.get_replies", {
        post: typeof post === "string" ? post : post.id,
        page,
      }),
      true,
    );
  }

  /**
   * Returns an array of peers that reposted the selected post.
   *
   * @param post The post ID or instance to get reposts from.
   * @param page The requested page number, by default the value is 1.
   */
  getRepostedPeers(post: string | Post, page?: number): Promise<Peer[]> {
    return this.client.invokeRequest(
      new Request("timeline.get_reposted_peers", {
        post: typeof post === "string" ? post : post.id,
        page,
      }),
      true,
    );
  }

  /**
   * Likes an existing post on the timeline.
   *
   * @param post The ID or instance of the post to like.
   */
  like(post: string | Post): Promise<boolean> {
    return this.client.invokeRequest(
      new Request("timeline.like", {
        post: typeof post === "string" ? post : post.id,
      }),
      true,
    );
  }

  /**
   * Likes an existing post on the timeline.
   *
   * @param post The ID or instance of the post to like.
   */
  unlike(post: string | Post): Promise<boolean> {
    return this.client.invokeRequest(
      new Request("timeline.unlike", {
        post: typeof post === "string" ? post : post.id,
      }),
      true,
    );
  }

  /**
   * Returns an array of posts from the users timeline.
   *
   * @param page The requested page number, by default the value is 1.
   */
  retrieveFeed(page?: number): Promise<Post[]> {
    return this.client.invokeRequest(
      new Request("timeline.retrieve_feed", { page }),
      true,
    );
  }
}

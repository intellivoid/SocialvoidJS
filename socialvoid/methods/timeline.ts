import { Request } from "../request.ts";
import { Document, Post } from "../types.ts";
import { MethodBase } from "./method_base.ts";

export class Timeline extends MethodBase {
    /**
     * Composes a new post to push to the timeline
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
}

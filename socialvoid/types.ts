export type FileType = "DOCUMENT" | "PHOTO" | "VIDEO" | "AUDIO";

export type PeerType = "USER" | "BOT" | "PROXY";

export type TextEntityType =
    | "BOLD"
    | "ITALIC"
    | "CODE"
    | "STRIKE"
    | "UNDERLINE"
    | "URL"
    | "MENTION"
    | "HASHTAG";

export type PostType = "UNKNOWN" | "DELETED" | "POST" | "REPLY" | "QUOTE" | "REPOST";

export type RelationshipType =
    | "NONE"
    | "FOLLOWING"
    | "FOLLOWS_YOU"
    | "AWAITING_APPROVAL"
    | "MUTUALLY_FOLLOWING"
    | "BLOCKED"
    | "BLOCKED_YOU";

export interface Post {
    /** The unique ID for the post */
    id: string;
    /** The post type used to represent the true intention of the post */
    type: PostType;
    /** The author peer of the post, this property can be null if the post was deleted. */
    peer: Peer | null;
    /** The source for where this post was composed from or collected from (eg; the client the user is using or the third-party source that the post was collected. This is determined by the server). This property can be null if the post was deleted. */
    source: string | null;
    /** The text content of the post source. This property can be null if the post has been deleted */
    text: string | null;
    /** An array of entities extracted from the text, can be used by the client to highlight clickable entities that preforms an action. This property can be null if the post was deleted. */
    entities: TextEntity[] | null;
    /** An array of resolved peers that was mentioned in the post text. This property can be null if the post was deleted */
    mentioned_peers: Peer[] | null;
    /** The original post that this post is replying to if applicable, otherwise null. */
    reply_to_post: Post | null;
    /** The original post that this post is quoting if applicable, otherwise null */
    quoted_post: Post | null;
    /** The original post that this post is reposting if applicable, otherwise null */
    reposted_post: Post | null;
    /** The original thread post, only applicable to replies. This value indicates the main thread post where all the replies originated from. This value will remain the same for all sub-replies of the main post. */
    original_thread_post: Post | null;
    /** The amount of likes that this post has if applicable, otherwise null */
    like_count: number | null;
    /** The amount of repost that this post has if applicable, otherwise null */
    reposts_count: number | null;
    /** The amount of replies that this post has if applicable, otherwise null */
    quotes_count: number | null;
    /** The Unix Timestamp for when this post was created */
    posted_timestamp: number;
    /** The flags associated with this post (WIP) */
    flags: string[];
}

export interface ServerInformation {
    /** The name of the network, eg; "Socialvoid" */
    network_name: string;
    /** The version of the protocol standard that the server is using, eg; "1.0" */
    protocol_version: string;
    /** The HTTP URL Endpoint for the CDN server of the network */
    cdn_server: string;
    /** The maximum size of a file that you can upload to the CDN Server (in bytes) */
    upload_max_file_size: number;
    /** The maximum time-to-live (in seconds) that an unauthorized session may have. The server will often reset the expiration whenever the session is used. */
    unauthorized_session_ttl: number;
    /** The maximum time-to-live (in seconds) that an authorized session may have. The server will often reset the expiration whenever the session is used. */
    authorized_session_ttl: number;
    /** The maximum amount of likes a client can retrieve at once using the method `timeline.get_likes` via the `limit` parameter */
    retrieve_likes_max_limit: number;
    /** The maximum amount of reposts a client can retrieve at once using the method `timeline.get_reposted_peers` via the `limit` parameter */
    retrieve_reposts_max_limit: number;
    /** The maximum amount of replies a client can retrieve at once using the method `timeline.get_replies` via the `limit` parameter */
    retrieve_replies_max_limit: number;
    /** The maximum amount of quotes a client can retrieve at once using the method `timeline.get_quotes` via the `limit` parameter */
    retrieve_quotes_max_limit: number;
    /** The maximum amount of followers a client can retrieve at once using the method `network.get_followers` via the `limit` parameter */
    retrieve_followers_max_limit: number;
    /** The maximum amount of following peers a client can retrieve at once using the method `network.get_following` via the `limit` parameter */
    retrieve_following_max_limit: number;
}

export interface Peer {
    /** The ID of the user associated to the network */
    id: string;
    /** The type of the peer entity */
    type: PeerType;
    /** The display name of the peer */
    name: string;
    /** The username associated with this peer */
    username: string;
    /** Flags associated with this peer */
    flags: string[];
}

export interface Session {
    /** The ID of the session obtained when establishing a session */
    id: string;
    /** An array of flags that has been set to this session */
    flags: string[];
    /** Indicates if the session is currently authenticated to a user */
    authenticated: boolean;
    /** The Unix Timestamp for when this session was first created */
    created: number;
    /** The Unix Timestamp for when this session expires */
    expires: number;
}

export interface Document {
    /** The ID of the document */
    id: string;
    /** The Mime of the file */
    file_mime: string;
    /** The original name of the file */
    file_name: string;
    /** The size of the file in bytes */
    file_size: number;
    /** The type of file detected by the server */
    file_type: FileType;
    /** An array of flags associated with this document */
    flags: string[];
}

export interface HelpDocument {
    /** The ID of the document, if the document gets updated then the ID will change. */
    id: string;
    /** The text contents of the document */
    text: string;
    /** An array of text entities being represented in the text */
    entities: TextEntity[];
}

export interface DisplayPictureSize {
    /** The width of the image */
    width: number;
    /** The height of the image */
    height: number;
    /** The document object that points to the display picture */
    document: Document;
}

export interface Profile {
    /** The first name of the entity */
    first_name: string;
    /** The last name of the entity */
    last_name: string | null;
    /** The full display name of the entity */
    name: string;
    /** A biography or description of the entity */
    biography: string | null;
    /** The location of the entity */
    location: string | null;
    /** The URL of the entity (Can be a website or a blog, etc) */
    url: string | null;
    /** The amount of followers that this entity has */
    followers_count: number;
    /** The amount of peers that this entity is following */
    following_count: number;
    /** An array of display picture size objects that represents the entity's display picture */
    display_picture_sizes: DisplayPictureSize[];
}

export interface SessionIdentification {
    /** The ID of the session obtained when establishing a session */
    session_id: string;
    /** The Public Hash of the client used when establishing the session */
    client_public_hash: string;
    /** The session challenge answer revolving around the client's private hash, the same client used to establish the session */
    challenge_answer: string;
}

export interface SessionEstablished {
    /** The ID of the session obtained when establishing a session */
    id: string;
    /** The TOTP based challenge secret */
    challenge: string;
}

export interface TextEntity {
    /** The text entity type */
    type: TextEntityType;
    /** The offset for when the entity begins in the text */
    offset: number;
    /** The length of the entity */
    length: number;
    /** The value of the entity, for styling entities such as `BOLD | ITALIC`, etc. this value will be null, but for values such as `MENTION | HASHTAG` & `URL` the value will contain the respective value for the entity, for example a `URL` entity will contain a value of a http URL */
    value: string | null;
}

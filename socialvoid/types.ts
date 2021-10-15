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

export interface Post {
    id: string;
    type: PostType;
    peer: Peer | null;
    source: string | null;
    text: string | null;
    entities: TextEntity[] | null;
    mentioned_peers: Peer[] | null;
    reply_to_post: Post | null;
    quoted_post: Post | null;
    reposted_post: Post | null;
    original_thread_post: Post | null;
    like_count: number | null;
    reposts_count: number | null;
    quotes_count: number | null;
    posted_timestamp: number;
    flags: string[];
}

export interface ServerInformation {
    network_name: string;
    protocol_version: string;
    cdn_server: string;
    upload_max_file_size: number;
    unauthorized_session_ttl: number;
    authorized_session_ttl: number;
    retrieve_likes_max_limit: number;
    retrieve_reposts_max_limit: number;
    retrieve_replies_max_limit: number;
    retrieve_quotes_max_limit: number;
    retrieve_followers_max_limit: number;
    retrieve_following_max_limit: number;
}

export interface Peer {
    id: string;
    type: PeerType;
    name: string;
    username: string;
    flags: string[];
}

export interface Session {
    id: string;
    flags: string[];
    authenticated: boolean;
    created: number;
    expires: number;
}

export interface Document {
    id: string;
    file_mime: string;
    file_name: string;
    file_size: number;
    file_type: FileType;
    flags: string[];
}

export interface HelpDocument {
    id: string;
    text: string;
    entities: TextEntity[];
}

export interface DisplayPictureSize {
    width: number;
    height: number;
    document: Document;
}

export interface Profile {
    first_name: string;
    last_name: string | null;
    name: string;
    biography: string | null;
    location: string | null;
    url: string | null;
    followers_count: number;
    following_count: number;
    display_picture_sizes: DisplayPictureSize[];
}

export interface SessionIdentification {
    session_id: string;
    client_public_hash: string;
    challenge_answer: string;
}

export interface SessionEstablished {
    id: string;
    challenge: string;
}

export interface TextEntity {
    type: TextEntityType;
    offset: number;
    length: number;
    value: string | null;
}

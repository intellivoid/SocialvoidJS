export class TypeBase {
  static fromObject: (obj: any) => TypeBase;
}

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

export type PostType =
  | "UNKNOWN"
  | "DELETED"
  | "POST"
  | "REPLY"
  | "QUOTE"
  | "REPOST";

export class Post extends TypeBase {
  constructor(
    public id: string,
    public type: PostType,
    public peer: Peer | null,
    public source: string | null,
    public text: string | null,
    public entities: TextEntity[] | null,
    public mentionedPeers: Peer[] | null,
    public replyToPost: Post | null,
    public quotedPost: Post | null,
    public repostedPost: Post | null,
    public likesCount: number | null,
    public repostsCount: number | null,
    public quotesCount: number | null,
    public postedTimestamp: Date,
    public flags: string[],
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.id,
      obj.type,
      obj.peer,
      obj.source,
      obj.text,
      obj.entities,
      obj.mentioned_peers,
      obj.reply_to_post,
      obj.quoted_post,
      obj.reposted_post,
      obj.likes_count,
      obj.reposts_count,
      obj.quotes_count,
      new Date(obj.posted_timestamp * 1000),
      obj.flags,
    );
  }
}

export class ServerInformation extends TypeBase {
  constructor(
    public networkName: string,
    public protocolVersion: string,
    public cdnServer: string,
    public uploadMaxFileSize: number,
    public unauthorizedSessionTtl: number,
    public authorizedSessionTtl: number,
    public retrieveLikesMaxLimit: number,
    public retrieveRepostsMaxLimit: number,
    public retrieveRepliesMaxLimit: number,
    public retrieveQuotesMaxLimit: number,
    public retrieveFollowersMaxLimit: number,
    public retrieveFollowingMaxLimit: number,
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.network_name,
      obj.protocol_version,
      obj.cdn_server,
      obj.upload_max_file_size,
      obj.unauthorized_session_ttl,
      obj.authorized_session_ttl,
      obj.retrieve_likes_max_limit,
      obj.retrieve_reposts_max_limit,
      obj.retrieve_replies_max_limit,
      obj.retrieve_quotes_max_limit,
      obj.retrieve_followers_max_limit,
      obj.retrieve_following_max_limit,
    );
  }
}

export class Peer extends TypeBase {
  constructor(
    public id: string,
    public type: PeerType,
    public name: string,
    public username: string,
    public flags: string[],
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.id, obj.type, obj.name, obj.username, obj.flags);
  }
}

export class Session extends TypeBase {
  constructor(
    public id: string,
    public flags: string[],
    public authenticated: boolean,
    public created: Date,
    public expires: Date,
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.id,
      obj.flags,
      obj.authenticated,
      new Date(obj.created * 1000),
      new Date(obj.expires * 1000),
    );
  }
}

export class Document extends TypeBase {
  constructor(
    public id: string,
    public fileMime: string,
    public fileName: string,
    public fileSize: number,
    public fileType: FileType,
    public flags: string[],
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.id,
      obj.file_mime,
      obj.file_name,
      obj.file_size,
      obj.file_type,
      obj.flags,
    );
  }
}

export class HelpDocument extends TypeBase {
  constructor(
    public id: string,
    public text: string,
    public entities: TextEntity[],
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.id, obj.text, obj.entities);
  }
}

export class DisplayPictureSize extends TypeBase {
  constructor(
    public width: number,
    public height: number,
    public document: Document,
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.width, obj.height, obj.document);
  }
}

export class Profile extends TypeBase {
  constructor(
    public firstName: string,
    public lastName: string | null,
    public name: string,
    public biography: string | null,
    public location: string | null,
    public url: string | null,
    public followersCount: number,
    public followingCount: number,
    public displayPictureSizes: DisplayPictureSize[],
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.first_name,
      obj.last_name,
      obj.name,
      obj.biography,
      obj.location,
      obj.url,
      obj.followers_count,
      obj.following_count,
      obj.display_picture_sizes,
    );
  }
}

export class SessionIdentification extends TypeBase {
  constructor(
    public sessionId: string,
    public clientPublicHash: string,
    public challengeAnswer: string,
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.session_id,
      obj.client_public_hash,
      obj.challenge_answer,
    );
  }
}

export class SessionEstablished extends TypeBase {
  constructor(
    public id: string,
    public challenge: string,
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.id, obj.challenge);
  }
}

export class TextEntity extends TypeBase {
  constructor(
    public type: TextEntityType,
    public offset: number,
    public length: number,
    public value: string | null,
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.type, obj.offset, obj.length, obj.value);
  }
}

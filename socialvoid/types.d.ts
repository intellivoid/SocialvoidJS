export declare class TypeBase {
    static fromObject: (obj: any) => TypeBase;
}
export declare class ServerInformation extends TypeBase {
    networkName: string;
    protocolVersion: string;
    cdnServer: string;
    uploadMaxFileSize: number;
    unauthorizedSessionTtl: number;
    authorizedSessionTtl: number;
    retrieveLikesMaxLimit: number;
    retrieveRepostsMaxLimit: number;
    retrieveRepliesMaxLimit: number;
    retrieveQuotesMaxLimit: number;
    retrieveFollowersMaxLimit: number;
    retrieveFollowingMaxLimit: number;
    constructor(networkName: string, protocolVersion: string, cdnServer: string, uploadMaxFileSize: number, unauthorizedSessionTtl: number, authorizedSessionTtl: number, retrieveLikesMaxLimit: number, retrieveRepostsMaxLimit: number, retrieveRepliesMaxLimit: number, retrieveQuotesMaxLimit: number, retrieveFollowersMaxLimit: number, retrieveFollowingMaxLimit: number);
    static fromObject(obj: any): ServerInformation;
}
export declare class Peer extends TypeBase {
    id: string;
    type: string;
    name: string;
    username: string;
    flags: string[];
    constructor(id: string, type: string, name: string, username: string, flags: string[]);
    static fromObject(obj: any): Peer;
}
export declare class Session extends TypeBase {
    id: string;
    flags: string[];
    authenticated: boolean;
    created: number;
    expires: number;
    constructor(id: string, flags: string[], authenticated: boolean, created: number, expires: number);
    static fromObject(obj: any): Session;
}
export declare class Document extends TypeBase {
    id: string;
    fileMime: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    flags: string[];
    createdTimestamp: number;
    constructor(id: string, fileMime: string, fileName: string, fileSize: number, fileType: string, flags: string[], createdTimestamp: number);
    static fromObject(obj: any): Document;
}
export declare class HelpDocument extends TypeBase {
    id: string;
    text: string;
    entities: TextEntity[];
    constructor(id: string, text: string, entities: TextEntity[]);
    static fromObject(obj: any): HelpDocument;
}
export declare class DisplayPictureSize extends TypeBase {
    width: number;
    height: number;
    document: Document;
    constructor(width: number, height: number, document: Document);
    static fromObject(obj: any): DisplayPictureSize;
}
export declare class Profile extends TypeBase {
    firstName: string;
    lastName: string | null;
    name: string;
    biography: string | null;
    location: string | null;
    url: string | null;
    followersCount: number;
    followingCount: number;
    displayPictureSizes: DisplayPictureSize[];
    constructor(firstName: string, lastName: string | null, name: string, biography: string | null, location: string | null, url: string | null, followersCount: number, followingCount: number, displayPictureSizes: DisplayPictureSize[]);
    static fromObject(obj: any): Profile;
}
export declare class SessionIdentification extends TypeBase {
    sessionId: string;
    clientPublicHash: string;
    challengeAnswer: string;
    constructor(sessionId: string, clientPublicHash: string, challengeAnswer: string);
    static fromObject(obj: any): SessionIdentification;
}
export declare class SessionEstablished extends TypeBase {
    id: string;
    challenge: string;
    constructor(id: string, challenge: string);
    static fromObject(obj: any): SessionEstablished;
}
export declare class TextEntity extends TypeBase {
    type: string;
    offset: number;
    length: number;
    value: string | null;
    constructor(type: string, offset: number, length: number, value: string | null);
    static fromObject(obj: any): TextEntity;
}

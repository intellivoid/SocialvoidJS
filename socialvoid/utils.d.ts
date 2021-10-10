import Request from "./Request.js";
import Response from "./Response.js";
export declare function throwError(code: number, message: string): void;
export declare function bufferToHex(buffer: ArrayBuffer): string;
export declare function sha1HexDigest(data: string): Promise<string>;
export declare function answerChallenge(clientPrivateHash: string, challenge: string): Promise<string>;
export declare const unixTimestampToDate: (unixTimestamp: number) => Date;
export declare function parseResponses(body: any): Response | Response[] | undefined;
export declare function serializeRequests(...requests: Request[]): string;
export declare const newHash: () => string;
export declare const formFromObj: (obj: {
    [key: string]: any;
}) => FormData;

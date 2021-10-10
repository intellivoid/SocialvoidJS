import Request from "./Request.js";
interface Session {
    id: string;
    publicHash: string;
    privateHash: string;
    challenge: string;
}
export default class BaseClient {
    readonly rpcEndpoint: string;
    readonly cdnEndpoint: string;
    protected _session?: Session;
    constructor(rpcEndpoint: string, cdnEndpoint: string);
    sessionId(): Promise<{
        session_identification: {
            session_id: string;
            client_public_hash: string;
            challenge_answer: string;
        };
    }>;
    invokeRequest(request: Request, includeSessionId?: boolean): Promise<any>;
    invokeRequests(...requests: Request[]): Promise<any[]>;
    invokeCDNRequest(data: FormData): Promise<any>;
    invokeCDNDownloadRequest(data: FormData): Promise<ArrayBuffer>;
    send(data: any): Promise<any>;
    sendCDN(data: FormData): Promise<globalThis.Response>;
}
export {};

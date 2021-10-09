import SocialvoidError from "./SocialvoidError.ts";

export class ServerError extends SocialvoidError {}

export class InternalServerError extends ServerError {}

export class DocumentUpload extends ServerError {}

export declare class SocialvoidError extends Error {
    errorCode: number;
    errorMessage: string;
    message: string;
    constructor(errorCode: number, errorMessage: string);
}
export declare class ValidationError extends SocialvoidError {
}
export declare class InvalidUsername extends ValidationError {
}
export declare class InvalidPassword extends ValidationError {
}
export declare class InvalidFirstName extends ValidationError {
}
export declare class InvalidLastName extends ValidationError {
}
export declare class InvalidBiography extends ValidationError {
}
export declare class UsernameAlreadyExists extends ValidationError {
}
export declare class InvalidPeerInput extends ValidationError {
}
export declare class InvalidPostText extends ValidationError {
}
export declare class InvalidClientPublicHash extends ValidationError {
}
export declare class InvalidClientPrivateHash extends ValidationError {
}
export declare class InvalidPlatform extends ValidationError {
}
export declare class InvalidVersion extends ValidationError {
}
export declare class InvalidClientName extends ValidationError {
}
export declare class InvalidSessionIdentification extends ValidationError {
}
export declare class InvalidFileForProfilePicture extends ValidationError {
}
export declare class FileTooLarge extends ValidationError {
}
export declare class InvalidHelpDocumentId extends ValidationError {
}
export declare class AgreementRequired extends ValidationError {
}
export declare class ServerError extends SocialvoidError {
}
export declare class InternalServerError extends ServerError {
}
export declare class DocumentUpload extends ServerError {
}
export declare class NetworkError extends SocialvoidError {
}
export declare class PeerNotFound extends NetworkError {
}
export declare class PostNotFound extends NetworkError {
}
export declare class PostDeleted extends NetworkError {
}
export declare class AlreadyReposted extends NetworkError {
}
export declare class FileUploadError extends NetworkError {
}
export declare class DocumentNotFound extends NetworkError {
}
export declare class AccessDenied extends NetworkError {
}
export declare class AuthenticationError extends SocialvoidError {
}
export declare class IncorrectLoginCredentials extends AuthenticationError {
}
export declare class IncorrectTwoFactorAuthenticationCode extends AuthenticationError {
}
export declare class AuthenticationNotApplicable extends AuthenticationError {
}
export declare class SessionNotFound extends AuthenticationError {
}
export declare class NotAuthenticated extends AuthenticationError {
}
export declare class PrivateAccessTokenRequired extends AuthenticationError {
}
export declare class AuthenticationFailure extends AuthenticationError {
}
export declare class BadSessionChallengeAnswer extends AuthenticationError {
}
export declare class TwoFactorAuthenticationRequired extends AuthenticationError {
}
export declare class AlreadyAuthenticated extends AuthenticationError {
}
export declare class SessionExpired extends AuthenticationError {
}
declare const map: {
    [key: string]: typeof SocialvoidError;
};
export default map;

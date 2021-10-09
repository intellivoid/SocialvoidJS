export class SocialvoidError extends Error {
  message: string;

  constructor(public errorCode: number, public errorMessage: string) {
    super();
    this.message = `Error ${errorCode}: ${errorMessage}`;
  }
}

export class ValidationError extends SocialvoidError {}

export class InvalidUsername extends ValidationError {}

export class InvalidPassword extends ValidationError {}

export class InvalidFirstName extends ValidationError {}

export class InvalidLastName extends ValidationError {}

export class InvalidBiography extends ValidationError {}

export class UsernameAlreadyExists extends ValidationError {}

export class InvalidPeerInput extends ValidationError {}

export class InvalidPostText extends ValidationError {}

export class InvalidClientPublicHash extends ValidationError {}

export class InvalidClientPrivateHash extends ValidationError {}

export class InvalidPlatform extends ValidationError {}

export class InvalidVersion extends ValidationError {}

export class InvalidClientName extends ValidationError {}

export class InvalidSessionIdentification extends ValidationError {}

export class InvalidFileForProfilePicture extends ValidationError {}

export class FileTooLarge extends ValidationError {}

export class InvalidHelpDocumentId extends ValidationError {}

export class AgreementRequired extends ValidationError {}

export class ServerError extends SocialvoidError {}

export class InternalServerError extends ServerError {}

export class DocumentUpload extends ServerError {}

export class NetworkError extends SocialvoidError {}

export class PeerNotFound extends NetworkError {}

export class PostNotFound extends NetworkError {}

export class PostDeleted extends NetworkError {}

export class AlreadyReposted extends NetworkError {}

export class FileUploadError extends NetworkError {}

export class DocumentNotFound extends NetworkError {}

export class AccessDenied extends NetworkError {}

export class AuthenticationError extends SocialvoidError {}

export class IncorrectLoginCredentials extends AuthenticationError {}

export class IncorrectTwoFactorAuthenticationCode extends AuthenticationError {}

export class AuthenticationNotApplicable extends AuthenticationError {}

export class SessionNotFound extends AuthenticationError {}

export class NotAuthenticated extends AuthenticationError {}

export class PrivateAccessTokenRequired extends AuthenticationError {}

export class AuthenticationFailure extends AuthenticationError {}

export class BadSessionChallengeAnswer extends AuthenticationError {}

export class TwoFactorAuthenticationRequired extends AuthenticationError {}

export class AlreadyAuthenticated extends AuthenticationError {}

export class SessionExpired extends AuthenticationError {}

const map: { [key: string]: typeof SocialvoidError } = {
  "8448": InvalidUsername,
  "8449": InvalidPassword,
  "8450": InvalidFirstName,
  "8451": InvalidLastName,
  "8452": InvalidBiography,
  "8453": UsernameAlreadyExists,
  "8454": InvalidPeerInput,
  "8455": InvalidPostText,
  "8456": InvalidClientPublicHash,
  "8457": InvalidClientPrivateHash,
  "8458": InvalidPlatform,
  "8459": InvalidVersion,
  "8460": InvalidClientName,
  "8461": InvalidSessionIdentification,
  "8462": InvalidFileForProfilePicture,
  "8463": FileTooLarge,
  "8464": InvalidHelpDocumentId,
  "8465": AgreementRequired,
  "8704": IncorrectLoginCredentials,
  "8705": IncorrectTwoFactorAuthenticationCode,
  "8706": AuthenticationNotApplicable,
  "8707": SessionNotFound,
  "8708": NotAuthenticated,
  "8709": PrivateAccessTokenRequired,
  "8710": AuthenticationFailure,
  "8711": BadSessionChallengeAnswer,
  "8712": TwoFactorAuthenticationRequired,
  "8713": AlreadyAuthenticated,
  "8714": SessionExpired,
  "12544": PeerNotFound,
  "12545": PostNotFound,
  "12546": PostDeleted,
  "12547": AlreadyReposted,
  "12548": FileUploadError,
  "12549": DocumentNotFound,
  "12550": AccessDenied,
  "16384": InternalServerError,
  "16385": DocumentUpload,
};

export default map;

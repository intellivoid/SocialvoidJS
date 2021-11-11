export class SocialvoidError extends Error {
  message: string;

  constructor(public errorCode: number, public errorMessage: string) {
    super();
    this.message = `Error ${errorCode}: ${errorMessage}`;
  }
}

// The client is attempting to authenticate when already authenticated
export class AlreadyAuthenticated extends SocialvoidError {}

// The authentication process failed for some unexpected reason, see the message for further details
export class AuthenticationFailure extends SocialvoidError {}

// Raised when the user does not support this method of authentication, see the message for further details
export class AuthenticationNotApplicable extends SocialvoidError {}

// The given session challenge answer is incorrect or out of sync
export class BadSessionChallengeAnswer extends SocialvoidError {}

// The given login credentials are incorrect
export class IncorrectLoginCredentials extends SocialvoidError {}

// The given two-factor authentication code is incorrect
export class IncorrectTwoFactorAuthenticationCode extends SocialvoidError {}

// Raised when the client attempts to invoke a method that requires authentication
export class NotAuthenticated extends SocialvoidError {}

// Raised when the user/entity uses a Private Access Token to authenticate and the client attempted to authenticate in another way
export class PrivateAccessTokenRequired extends SocialvoidError {}

// Raised when trying to use a session that has expired
export class SessionExpired extends SocialvoidError {}

// Two-Factor Authentication is required, the client must repeat the same request but provide a Two-Factor authentication code as well
export class TwoFactorAuthenticationRequired extends SocialvoidError {}

// The authenticated peer does not have sufficient permissions to access the requested resource or to invoke a restricted method
export class AccessDenied extends SocialvoidError {}

// Raised when the client attempts to repost a post that has already been reposted
export class AlreadyReposted extends SocialvoidError {}

// Raised when attempting to interact with a peer that blocked you
export class BlockedByPeer extends SocialvoidError {}

// Raised when attempting to interact with a peer that you blocked
export class BlockedPeer extends SocialvoidError {}

// The requested Document ID was not found on the server
export class DocumentNotFound extends SocialvoidError {}

// Raised when there was an error while trying to upload one or more files to the network
export class FileUploadError extends SocialvoidError {}

// The requested user entity was not found in the network
export class PeerNotFound extends SocialvoidError {}

// Raised when the client requested a post that was deleted
export class PostDeleted extends SocialvoidError {}

// Raised when the client requested a post that isn't found
export class PostNotFound extends SocialvoidError {}

// Raised when attempting to invoke a method or change that involves a peer that you are authenticated as such as following a peer that you are authenticated as
export class SelfInteractionNotPermitted extends SocialvoidError {}

// Raised when there was an error while trying to process the document upload
export class DocumentUpload extends SocialvoidError {}

// Raised when there was an unexpected error while trying to process your request.
export class InternalServerError extends SocialvoidError {}

// The client/user must agree to the condition to invoke the method
export class AgreementRequired extends SocialvoidError {}

// The given file is too large to be processed
export class FileTooLarge extends SocialvoidError {}

// Raised when the given attachments are invalid
export class InvalidAttachments extends SocialvoidError {}

// The Biography is too long or contains invalid characters, see the message for further details
export class InvalidBiography extends SocialvoidError {}

// The client name contains invalid characters or is too long, see the message for further details
export class InvalidClientName extends SocialvoidError {}

// The client's private hash is invalid and cannot be identified as a sha256
export class InvalidClientPrivateHash extends SocialvoidError {}

// The client's public hash is invalid and cannot be identified as a sha256
export class InvalidClientPublicHash extends SocialvoidError {}

// The given file is invalid for a profile picture
export class InvalidFileForProfilePicture extends SocialvoidError {}

// Raised when the given filename is invalid
export class InvalidFileName extends SocialvoidError {}

// Raised when the given filename is invalid
export class InvalidFileName extends SocialvoidError {}

// The given geo location value is invalid or too long
export class InvalidGeoLocation extends SocialvoidError {}

// The given Help Document ID is invalid
export class InvalidHelpDocumentId extends SocialvoidError {}

// The Last Name provided contains invalid characters and or is too long, see the message for further details
export class InvalidLastName extends SocialvoidError {}

// The page parameter contains an invalid value. It cannot be a negative value or 0, see the message for further details
export class InvalidPageValue extends SocialvoidError {}

// The given password is insecure, see the message for further details
export class InvalidPassword extends SocialvoidError {}

// The client provided an invalid peer identification as input
export class InvalidPeerInput extends SocialvoidError {}

// The platform name contains invalid characters or is too long, see the message for further details
export class InvalidPlatform extends SocialvoidError {}

// The post contains invalid characters or is too long, see the message for further details
export class InvalidPostText extends SocialvoidError {}

// The session identification object is invalid, see the message for further details
export class InvalidSessionIdentification extends SocialvoidError {}

// The given URL input is invalid
export class InvalidUrlValue extends SocialvoidError {}

// The given username is invalid and does not meet the specification
export class InvalidUsername extends SocialvoidError {}

// The version is invalid or is too long, see the message for further details
export class InvalidVersion extends SocialvoidError {}

// Raised when the amount of attachments exceeds what the server supports
export class TooManyAttachments extends SocialvoidError {}

// The username is already registered in the network and cannot be used
export class UsernameAlreadyExists extends SocialvoidError {}

const map: { [key: string]: typeof SocialvoidError } = {
  "8713": AlreadyAuthenticated,
  "8710": AuthenticationFailure,
  "8706": AuthenticationNotApplicable,
  "8711": BadSessionChallengeAnswer,
  "8704": IncorrectLoginCredentials,
  "8705": IncorrectTwoFactorAuthenticationCode,
  "8708": NotAuthenticated,
  "8709": PrivateAccessTokenRequired,
  "8714": SessionExpired,
  "8712": TwoFactorAuthenticationRequired,
  "12550": AccessDenied,
  "12547": AlreadyReposted,
  "12551": BlockedByPeer,
  "12552": BlockedPeer,
  "12549": DocumentNotFound,
  "12548": FileUploadError,
  "12544": PeerNotFound,
  "12546": PostDeleted,
  "12545": PostNotFound,
  "12553": SelfInteractionNotPermitted,
  "16385": DocumentUpload,
  "16384": InternalServerError,
  "8465": AgreementRequired,
  "8463": FileTooLarge,
  "8470": InvalidAttachments,
  "8452": InvalidBiography,
  "8460": InvalidClientName,
  "8457": InvalidClientPrivateHash,
  "8456": InvalidClientPublicHash,
  "8462": InvalidFileForProfilePicture,
  "8471": InvalidFileName,
  "8471": InvalidFileName,
  "8467": InvalidGeoLocation,
  "8464": InvalidHelpDocumentId,
  "8451": InvalidLastName,
  "8466": InvalidPageValue,
  "8449": InvalidPassword,
  "8454": InvalidPeerInput,
  "8464": InvalidPlatform,
  "8455": InvalidPostText,
  "8461": InvalidSessionIdentification,
  "8468": InvalidUrlValue,
  "8448": InvalidUsername,
  "8459": InvalidVersion,
  "8469": TooManyAttachments,
  "8453": UsernameAlreadyExists,
};

export default map;

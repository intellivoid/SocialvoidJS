// This object describes the size of a display picture followed by a document object that results in said display picture size.
export interface DisplayPictureSize {
  // The width of the image
  width: number;
  // The height of the image
  height: number;
  // The document object that points to the display picture
  document: Document;
}

// A document object contains basic information about the file associated with the document and the document ID used to retrieve the document from the CDN Server
export interface Document {
  // The ID of the document
  id: string;
  // The Mime of the file
  file_mime: string;
  // The original name of the file
  file_name: string;
  // The size of the file in bytes
  file_size: number;
  // The type of file detected by the server
  file_type: string;
  // An array of flags associated with this document
  flags: string[];
}

// The object ErrorDefinition contains information about an error that the server is capable of returning if a method fails to execute.
export interface ErrorDefinition {
  // The ID of the ErrorDefinition, which is a crc32 hash of the following value; <ProtocolVersion>:<ErrorName>:<ErrorCode> (1.0:InternalServerError:16384)
  id: string;
  // The name of the error, this is a unique value.
  name: string;
  // A description of the error
  description: string;
  // The error code, this is a unique value.
  error_code: number;
}

// A help document is often retrieved from the server as a way to represent a document to the user for multiple purposes, from quick guides to server announcements or the legal documents required to be shown to the user before they register an account to the network.
export interface HelpDocument {
  // The ID of the document, if the document gets updated then the ID will change
  id: string;
  // The text contents of the document
  text: string;
  // An array of text entities being represented in the text
  entities: TextEntity[];
}

// The object MethodDefinition contains information about method, namespace, permission requirements and the parameters it accepts
export interface MethodDefinition {
  // A crc32 hash of the methods's ID following the value; <ProtocolVersion>:<MethodName> eg; 1.0:timelime.compose
  id: string;
  // The namespace of the method e.g., timeline, network, etc.
  namespace: string;
  // The name of the method without the namespace compose, like, repost, etc.
  method_name: string;
  // The full name of the method with the leading namespace e.g. timeline.compose, timeline.like
  method: string;
  // The description of the method
  description: string;
  // The array of permission requirements for this method
  permission_requirements: string[];
  // An array of possible return types
  return_types: TypeDefinition[];
}

// The object ObjectDefinition explains the structure of a object that the server could return or work with.
export interface ObjectDefinition {
  // A crc32 hash of the object's ID following the value; <ProtocolVersion>:<ObjectName> eg; 1.0:Peer
  id: string;
  // The name of the object
  name: string;
  // A description of the object
  description: string;
  // An array of ParameterDefinitions explaining the object structure
  parameters: ParameterDefinition[];
}

// The object ParameterDefinition contains information about the parameters used and or available, usually represented within an array; this object indicates the availabe types, name, description and requirement of the parameter. This can be applied to object property structures or method parameters
export interface ParameterDefinition {
  // The name of the parameter
  name: string;
  // An array of types that are used for this parameter
  types: TypeDefinition[];
  // Indicates if this parameter is required or not, for objects this will always be true.
  required: boolean;
  // The description of the parameter
  description: string;
}

// A peer object provides a basic description and identification a peer entity that can contain information used to identify a peer on the client or basic flags and properties of the peer to pre-determine what actions are available for a peer.
export interface Peer {
  // The ID of the document, if the document gets updated then the ID will change
  id: string;
  // The type of the peer entity
  type: string;
  // The display name of the peer
  name: string;
  // The username associated with this peer
  username: string;
  // Flags associated with this peer
  flags: string[];
}

// A post object is used to represent a post submitted either by a peer, this object can contain recursive objects.
export interface Post {
  // The unique ID for the post
  id: string;
  // The post type used to represent the true intention of the post
  type: string;
  // The author peer of the post, this property can be null if the post was deleted.
  peer: Peer | null;
  // The source for where this post was composed from or collected from (eg; the client the user is using or the third-party source that the post was collected. This is determined by the server). This property can be null if the post was deleted.
  source: string | null;
  // The text content of the post source. This property can be null if the post has been deleted
  text: string | null;
  // An array of attached documents to the post
  attachments: Document[];
  // An array of entities extracted from the text, can be used by the client to highlight clickable entities that preforms an action.
  entities: TextEntity[];
  // An array of resolved peers that was mentioned in the post text.
  mentioned_peers: Peer[];
  // The original post that this post is replying to if applicable, otherwise null.
  reply_to_post: Post | null;
  // The original post that this post is quoting if applicable, otherwise null
  quoted_post: Post | null;
  // The original post that this post is reposting if applicable, otherwise null
  reposted_post: Post | null;
  // The original thread post, only applicable to replies. This value indicates the main thread post where all the replies originated from. This value will remain the same for all sub-replies of the main post.
  original_thread_post: Post | null;
  // The amount of likes that this post has if applicable, otherwise null
  like_count: number | null;
  // The amount of repost that this post has if applicable, otherwise null
  repost_count: number | null;
  // The amount of quoted posts that this post has if applicable, otherwise null
  quote_count: number | null;
  // The amount of replies that this post has if applicable, otherwise null
  reply_count: number | null;
  // The Unix Timestamp for when this post was created
  posted_timestamp: number;
  // The flags associated with this post
  flags: string[];
}

// The profile object provides a profile display for a peer entity, this is mainly used to represent a "Profile" display of a peer.
export interface Profile {
  // The first name of the entity
  first_name: string;
  // The last name of the entity
  last_name: string | null;
  // The full display name of the entity
  name: string;
  // A biography or description of the entity
  biography: string | null;
  // The location of the entity
  location: string | null;
  // The URL of the entity (Can be a website or a blog, etc)
  url: string | null;
  // The amount of followers that this entity has
  followers_count: number;
  // The amount of peers that this entity is following
  following_count: number;
  // An array of display picture size objects that represents the entity's display picture
  display_picture_sizes: DisplayPictureSize[];
}

// The ProtocolDefinitions object contains object definitions of what the server's version of the protocol has defined and what their use cases are. Much like a documentation representation in a object structure that can be understood by clients which allows for constructors during runtime.
export interface ProtocolDefinitions {
  // The version of the protocol being used by the server, eg; 1.0
  version: string;
  // A list of error definitions defined by the server and protocol with their respective error codes and descriptions
  errors: ErrorDefinition[];
  // A list of object definitions defined by the server and protocol with their respective descriptions, names and parameters.
  objects: ObjectDefinition[];
  // A list of method definitions defined by the server and protocol with their respective descriptions, names and parameters.
  methods: MethodDefinition[];
}

// The ServerInformation object is a simple object that gives details about the server's attributes and limits or location of other servers that the client should communicate to for other purposes such as a CDN.
export interface ServerInformation {
  // The name of the network, eg; "Socialvoid"
  network_name: string;
  // The version of the protocol standard that the server is using, eg; "1.0"
  protocol_version: string;
  // The HTTP URL Endpoint for the CDN server of the network
  cdn_server: string;
  // The maximum size of a file that you can upload to the CDN Server (in bytes)
  upload_max_file_size: number;
  // The maximum time-to-live (in seconds) that an unauthorized session may have. The server will often reset the expiration whenever the session is used.
  unauthorized_session_ttl: number;
  // The maximum time-to-live (in seconds) that an authorized session may have. The server will often reset the expiration whenever the session is used.
  authorized_session_ttl: number;
  // The maximum amount of likes a client can retrieve at once using the method timeline.get_likes via the page parameter
  retrieve_likes_max_limit: number;
  // The maximum amount of reposts a client can retrieve at once using the method timeline.get_reposted_peers via the page parameter
  retrieve_reposts_max_limit: number;
  // The maximum amount of replies a client can retrieve at once using the method timeline.get_replies via the page parameter
  retrieve_replies_max_limit: number;
  // The maximum amount of quotes a client can retrieve at once using the method timeline.get_quotes via the page parameter
  retrieve_quotes_max_limit: number;
  // The maximum amount of followers a client can retrieve at once using the method network.get_followers via the page parameter
  retrieve_followers_max_limit: number;
  // The maximum amount of following peers a client can retrieve at once using the method network.get_following via the page parameter
  retrieve_following_max_limit: number;
  // The amount of posts a client can retrieve at once using the method timeline.retrieve_feed via the page parameter
  retrieve_feed_max_limit: number;
}

// A session object is contains basic information about the session.
export interface Session {
  // The ID of the session obtained when establishing a session
  id: string;
  // An array of flags that has been set to this session
  flags: string[];
  // An array of permission sets that has been set to this session
  permissions: string[];
  // Indicates if the session is currently authenticated to a user
  authenticated: boolean;
  // The Unix Timestamp for when this session was first created
  created: number;
  // The Unix Timestamp for when this session expires
  expires: number;
}

// A SessionEstablished object is returned when you create a session. This object returns basic information about the session that the server has created for you.
export interface SessionEstablished {
  // The ID of the session obtained when establishing a session
  id: string;
  // The TOTP based challenge secret
  challenge: string[];
}

// A SessionIdentification object allows your client to identify the session it's using and prove that it is the owner of the session, it proves as a identification effort and security effort.
export interface SessionIdentification {
  // The ID of the session obtained when establishing a session
  id: string;
  // The TOTP based challenge secret
  challenge: string[];
}

// The text entity object describes the text type, this is useful for clients to render the given text correctly. For example a "@mention" will have a TextEntity with the value mention. So that the client can perform an action when this entity is clicked.
export interface TextEntity {
  // The text entity type
  type: string;
  // The offset for when the entity begins in the text
  offset: number;
  // The length of the entity
  length: number;
  // The value of the entity, for styling entities such as BOLD, ITALIC, etc. this value will be null, but for values such as MENTION, HASHTAG & URL the value will contain the respective value for the entity, for example a URL entity will contain a value of a http URL
  value: string | null;
}

// The object TypeDefinition contains information about the defined type, the vector property can indicate if the type is being represented is a vector (list/array) and should be iterated
export interface TypeDefinition {
  // The type of the value, can either be a builtin type or one of the pre-defined object being represented as a string, eg; string, Peer, null
  type: string;
  // An array of types that are used for this parameterIndicates if the type is represented as a vector or not (List/Array)
  vector: boolean;
}

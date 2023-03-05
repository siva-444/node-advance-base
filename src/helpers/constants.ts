export const USER_TYPE = {
  ADMIN: 1,
  ISO: 2,
  SUB_ISO: 3,
  MERCHANT: 4,
  OPERATOR: 5,
} as const;

export const STATUS_CODES = {
  /**
   *
   * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
   * CONTINUE: 100,
   */

  /**
   *
   * This code indicates that the server has received and is processing the request,
   *  but no response is available yet.
   PROCESSING: 102,
   */

  /**
   *
   * The request has succeeded. The meaning of a success varies depending on the HTTP method:
   * GET: The resource has been fetched and is transmitted in the message body.
   * HEAD: The entity headers are in the message body.
   * POST: The resource describing the result of the action is transmitted in the message body.
   * TRACE: The message body contains the request message as received by the server
   */
  OK: 200,

  /**
   *
   * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
   */
  CREATED: 201,

  /**
   *
   * The request has been received but not yet acted upon. It is non-committal,
   *  meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request,
   *  or for batch processing.
   ACCEPTED: 202,
   */

  /**
   *
   * There is no content to send for this request,
   *  but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
   */
  NO_CONTENT: 204,

  /**
   *
   * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
   RESET_CONTENT: 205,
   */

  /**
   *
   * This response code is used because of range header sent by the client to separate download into multiple streams.
   PARTIAL_CONTENT: 206,
   */

  /**
   *
   * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
   MULTI_STATUS: 207,
   */

  /**
   *
   * Server sent this response to directing client to get requested resource to another URI with an GET request.
   SEE_OTHER: 303,
   */

  /**
   *
   * This is used for caching purposes. It is telling to client that response has not been modified. So,
   *  client can continue to use same cached version of response.
   NOT_MODIFIED: 304,
   */

  /**
   *
   * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code,
   *  with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request,
   *  a POST must be used in the second request.
   TEMPORARY_REDIRECT: 307,
   */

  /**
   *
   * This response means that server could not understand the request due to invalid syntax.
   */
  BAD_REQUEST: 400,

  /**
   *
   * Although the HTTP standard specifies "unauthorized",
   *  semantically this response means "unauthenticated". That is,
   *  the client must authenticate itself to get the requested response.
   */
  UNAUTHORIZED: 401,

  /**
   *
   * The client does not have access rights to the content,
   *  i.e. they are unauthorized,
   *  so server is rejecting to give proper response. Unlike 401,
   *  the client's identity is known to the server.
   */
  FORBIDDEN: 403,

  /**
   *
   * The server can not find requested resource. In the browser,
   *  this means the URL is not recognized. In an API,
   *  this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.
   */
  NOT_FOUND: 404,

  /**
   *
   * The request method is known by the server but has been disabled and cannot be used. For example,
   *  an API may forbid DELETE-ing a resource. The two mandatory methods,
   *  GET and HEAD,
   *  must never be disabled and should not return this error code.
   METHOD_NOT_ALLOWED: 405,
   */

  /**
   *
   * This response is sent when the web server,
   *  after performing server-driven content negotiation,
   *  doesn't find any content following the criteria given by the user agent.
   NOT_ACCEPTABLE: 406,
   */

  /**
   *
   * This response is sent on an idle connection by some servers,
   *  even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers,
   *  like Chrome,
   *  Firefox 27+,
   *  or IE9,
   *  use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
   */
  REQUEST_TIMEOUT: 408,

  /**
   *
   * The server rejected the request because the Content-Length header field is not defined and the server requires it.
   LENGTH_REQUIRED: 411,
   */

  /**
   *
   * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
   */
  REQUEST_TOO_LONG: 413,

  /**
   *
   * The media format of the requested data is not supported by the server,
   *  so the server is rejecting the request.
   */
  UNSUPPORTED_MEDIA_TYPE: 415,

  /**
   *
   * This response code means the expectation indicated by the Expect request header field can't be met by the server.
   *
   * Here its will used only for internal app usage
   * If any exception occur current response consider as Expectation Failed response
   */
  EXPECTATION_FAILED: 417,

  /**
   *
   * The request was well-formed but was unable to be followed due to semantic errors.
   */
  UNPROCESSABLE_ENTITY: 422,

  /**
   *
   * The resource that is being accessed is locked.
   LOCKED: 423,
   */

  /**
   *
   * The user has sent too many requests in a given amount of time ("rate limiting").
   */
  TOO_MANY_REQUESTS: 429,

  /**
   *
   * The server encountered an unexpected condition that prevented it from fulfilling the request.
   */
  INTERNAL_SERVER_ERROR: 500,

  /**
   *
   * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
   NOT_IMPLEMENTED: 501,
   */

  /**
   *
   * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response,
   *  a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should,
   *  if possible,
   *  contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response,
   *  as these temporary condition responses should usually not be cached.
   SERVICE_UNAVAILABLE: 503,
   */

  /**
   *
   * This error response is given when the server is acting as a gateway and cannot get a response in time.
   GATEWAY_TIMEOUT: 504,
   */

  /**
   *
   * The HTTP version used in the request is not supported by the server.
   HTTP_VERSION_NOT_SUPPORTED: 505,
   */
} as const;

export const RESPONSE_STATUS = {
  SUCCESS: 1,
  FAILURE: 0,
};
export const ERROR_CODES = {
  SUCCESS: 'S00',
  JSON_ERROR: 'E01',
  DB_ERROR: 'E02',
  FIELD_MISSING: 'E03',
  OPERATION_INVALID: 'E04',
  ACTION_INVALID: 'E05',
  NO_ROWS_UPDATED: 'E06',
  OTP_INVALID: 'E07',
  APP_ID_INVALID: 'E08',
  APP_KEY_INVALID: 'E09',
  INPUT_INVALID: 'E10',
  USER_INVALID: 'E11',
  USER_INACTIVE: 'E12',
  USER_DELETED: 'E13',
  OTP_EXPIRED: 'E14',
};

export const PERMISSIONS = {
  TFA: {
    VERIFY: '2fa:verify',
  },
  MODULES: {
    ALL: 'modules:*',
    TOKEN_REFRESH: 'token:refresh',
  },
  USER_TYPE: {
    ADMIN: 'user:admin',
    ISO: 'user:iso',
    SUB_ISO: 'user:sub_iso',
    MERCHANT: 'user:merchant',
    OPERATOR: 'user:operator',
  },
} as const;
export const DATE_FILTERS = {
  Recent: 'Recent',
  Today: 'Today',
  Yesterday: 'Yesterday',
  Last_30_Days: 'Last 30 Days',
  Last_Month: 'Last Month',
  Last_Week: 'Last Week',
  Current_Week: 'Current Week',
} as const;

export const TMS_CODES = {
  /** Error Codes From TMS  */
  ERROR_CODES: [
    {
      SUCCESS: 1,
      FAILED: 0,
      DUPLICATE: -1,
    },
  ],
  /** Response Codes From TMS  */
  RESPONSES: [
    {
      SUCCESS: 200,
      FAILED: 400,
      SERVER_ERROR: 500,
    },
  ],
};

export const ZENDESK_CODES = {
  RESPONSES: {
    SUCCESS: 200,
    CREATED: 201,
    FAILED: 400,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
  },
};

export const ZIPAPI_CODES = {
  RESPONSES: {
    SUCCESS: 200,
  },
};

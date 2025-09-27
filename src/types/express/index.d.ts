import type { PaginationMetaType, TokenPayload } from '@app-type/common.ts';
import type { StatusCodeValues } from '@app-type/unions.ts';
import 'jsonwebtoken';

type MessageCodeType = string;
type MessageCodeOnlyFunction = (messageCode: null | MessageCodeType) => void;
declare module 'jsonwebtoken' {
  // Replace/extend JwtPayload with your own
  export interface JwtPayload {
    user_id: number;
    role: 'admin' | 'teacher' | 'student';
  }
}
declare module 'express-serve-static-core' {
  interface Request {
    currentUser: {
      user_id: number;
    };
    tokenPayload: TokenPayload;
  }
  interface Response {
    respond: (
      messageCode: null | MessageCodeType,
      data: null | Record<string, unknown>,
      status?: StatusCodeValues,
    ) => void;
    sendSuccessResponse: (
      messageCode: null | MessageCodeType,
      data: null | Record<string, unknown> | Record<string, unknown>[],
      appendData?: null | Record<string, unknown>,
    ) => void;
    sendResponseWithPagination: (
      messageCode: null | MessageCodeType,
      data: null | Record<string, unknown>[],
      meta: PaginationMetaType,
      appendData?: null | Record<string, unknown>,
    ) => void;
    sendNoContentResponse: MessageCodeOnlyFunction;
    sendUnknownFieldResponse: (
      messageCode: null | MessageCodeType,
      unknown_fields: null | Record<string, unknown>,
    ) => void;
    sendBadHeaderResponse: (
      messageCode: null | MessageCodeType,
      missedHeaders: null | Record<string, unknown>,
    ) => void;
    sendUnauthorizeResponse: MessageCodeOnlyFunction;
    sendForbiddenResponse: MessageCodeOnlyFunction;
    sendNotFoundResponse: MessageCodeOnlyFunction;
    sendValidationFailureResponse: (
      messageCode: null | MessageCodeType,
      errors: null | Record<string, string>,
    ) => void;
    sendRateLimitExceedResponse: MessageCodeOnlyFunction;
    sendExpectationFailed: (
      messageCode: null | MessageCodeType,
      exception: null | Record<unknown, unknown>,
    ) => void;
    sendServerErrorResponse: (
      messageCode: null | MessageCodeType,
      exception: null | Record<string, string>,
    ) => void;
  }
}

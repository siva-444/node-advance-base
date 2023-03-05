import type { PaginationMetaType, TokenPayload } from '@app-type/common';
import type { StatusCodeValues } from '@app-type/unions';
type MessageCodeType = 'E01' | string;
type MessageCodeOnlyFunction = (messageCode: null | MessageCodeType) => void;
declare global {
  namespace Express {
    export interface Request {
      currentUser: {
        user_id: number;
      };
      tokenPayload: TokenPayload;
    }
    export interface Response {
      respond: (
        messageCode: null | MessageCodeType,
        data: null | Record<string, unknown>,
        status?: StatusCodeValues
      ) => void;
      sendSuccessResponse: (
        messageCode: null | MessageCodeType,
        data: null | Record<string, unknown> | Record<string, unknown>[],
        appendData?: null | Record<string, unknown>
      ) => void;
      sendResponseWithPagination: (
        messageCode: null | MessageCodeType,
        data: null | Record<string, unknown>[],
        meta: PaginationMetaType,
        appendData?: null | Record<string, unknown>
      ) => void;
      sendNoContentResponse: MessageCodeOnlyFunction;
      sendUnknownFieldResponse: (
        messageCode: null | MessageCodeType,
        unknown_fields: null | Record<string, unknown>
      ) => void;
      sendBadHeaderResponse: (
        messageCode: null | MessageCodeType,
        missedHeaders: null | Record<string, unknown>
      ) => void;
      sendUnauthorizeResponse: MessageCodeOnlyFunction;
      sendForbiddenResponse: MessageCodeOnlyFunction;
      sendNotFoundResponse: MessageCodeOnlyFunction;
      sendValidationFailureResponse: (
        messageCode: null | MessageCodeType,
        errors: null | Record<string, string>
      ) => void;
      sendRateLimitExceedResponse: MessageCodeOnlyFunction;
      sendExpectationFailed: (
        messageCode: null | MessageCodeType,
        exception: null | Record<unknown, unknown>
      ) => void;
      sendServerErrorResponse: (
        messageCode: null | MessageCodeType,
        exception: null | Record<string, string>
      ) => void;
    }
  }
}

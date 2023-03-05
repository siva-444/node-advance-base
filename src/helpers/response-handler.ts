import { STATUS_CODES } from '@helper/constants';

import type { StatusCodesValues } from '@app-types';
import type { Response as ExpResponse, NextFunction, Request } from 'express';
const getMessage = (messageCode: string) => {
  return messageCode;
};
type ResponseDataType = {
  records?: Record<string, unknown> | Record<string, unknown>[] | null;
} & Record<string, unknown>;
const responseHandler = (_: Request, response: ExpResponse, next: NextFunction) => {
  response.respond = (
    messageCode: string | null = null,
    data = null,
    status: StatusCodesValues = STATUS_CODES.OK
  ) => {
    const responseBody: { message?: string; data?: Record<string, unknown> | null } = {};
    if (messageCode !== null) responseBody.message = getMessage(messageCode);
    if (data !== null) responseBody.data = data;

    if (responseBody.message || responseBody.data) response.status(status).json(responseBody).end();
    else response.status(status).end();
  };

  /**
   * Send this response when api was success and need to send records or also need additional data like meta, token
   *
   * @param messageCode
   * @param records
   * @param appendData
   *
   */

  response.sendSuccessResponse = (messageCode = 'success', records = null, appendData = null) => {
    let responseData: ResponseDataType | null = appendData ?? {};
    if (records !== null) responseData.records = records;
    else if (appendData === null) responseData = null;
    response.respond(messageCode, responseData);
  };
  /**
   * Send this response when api was success and need to send paginated records
   * 204 will handled by empty records
   *
   * @param messageCode
   * @param records
   * @param appendData
   *
   */
  response.sendResponseWithPagination = (
    messageCode = 'success',
    records,
    meta,
    appendData = null
  ) => {
    const responseData: ResponseDataType | null = appendData ?? {};
    responseData['meta'] = meta;

    if (records !== null) responseData.records = records;
    response.respond(messageCode, responseData);
  };

  /**
   * Send this response when requested api have a empty records like in pagination
   *
   */
  response.sendNoContentResponse = (messageCode = String(STATUS_CODES.NO_CONTENT)) => {
    response.respond(messageCode, null, STATUS_CODES.NO_CONTENT);
  };

  /**
   * Send this response when api user provide fields that doesn't exist in our application
   *
   * @param unknown_fields
   */
  response.sendUnknownFieldResponse = (
    messageCode = String(STATUS_CODES.BAD_REQUEST),
    unknown_fields = null
  ) => {
    response.respond(messageCode, { unknown_fields }, STATUS_CODES.BAD_REQUEST);
  };

  /**
   * Send this response when api request data does not satisfy the validation
   *
   * @param string|null messageCode
   * @param string|null missedHeaders
   */
  response.sendBadHeaderResponse = (
    messageCode = String(STATUS_CODES.BAD_REQUEST),
    missedHeaders = null
  ) => {
    response.respond(messageCode, { headers: missedHeaders }, STATUS_CODES.FORBIDDEN);
  };

  /**
   * Send Unauthorized Response
   *
   * @param string|null messageCode
   */
  response.sendUnauthorizeResponse = (messageCode = String(STATUS_CODES.UNAUTHORIZED)) => {
    response.respond(messageCode, null, STATUS_CODES.UNAUTHORIZED);
  };

  /**
   * Send this response when user had valid token
   * But don't have an access for requested action
   *
   * @param string|null messageCode
   */
  response.sendForbiddenResponse = (messageCode = String(STATUS_CODES.FORBIDDEN)) => {
    response.respond(messageCode, null, STATUS_CODES.FORBIDDEN);
  };

  /**
   * Send 404 not found response
   *
   * @param string|null messageCode
   */
  response.sendNotFoundResponse = (messageCode = String(STATUS_CODES.NOT_FOUND)) => {
    response.respond(messageCode, null, STATUS_CODES.NOT_FOUND);
  };

  /**
   * Send this response when api request data does not satisfy the validation
   *
   * @param string|null messageCode
   * @param string|null errors
   */
  response.sendValidationFailureResponse = (
    messageCode = String(STATUS_CODES.UNPROCESSABLE_ENTITY),
    errors = null
  ) => {
    response.respond(messageCode, { errors }, STATUS_CODES.UNPROCESSABLE_ENTITY);
  };

  /**
   * Send RateLimit exceed Response
   *
   * @param {string|null} messageCode
   */
  response.sendRateLimitExceedResponse = (messageCode = String(STATUS_CODES.TOO_MANY_REQUESTS)) => {
    response.respond(messageCode, null, STATUS_CODES.TOO_MANY_REQUESTS);
  };

  /**
   * Send this response when server don't know how to handle request
   *
   * @param string|null messageCode
   */
  response.sendExpectationFailed = (
    messageCode = String(STATUS_CODES.EXPECTATION_FAILED),
    exception
  ) => {
    response.respond(messageCode, { exception }, STATUS_CODES.EXPECTATION_FAILED);
  };

  /**
   * Send this response when server have a problem
   *
   * @param string|null messageCode
   */
  response.sendServerErrorResponse = (
    messageCode = String(STATUS_CODES.INTERNAL_SERVER_ERROR),
    exception
  ) => {
    response.respond(messageCode, { exception }, STATUS_CODES.INTERNAL_SERVER_ERROR);
  };

  next();
};

export default responseHandler;

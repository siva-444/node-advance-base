import { UnauthorizedError } from 'express-jwt';

import logger from '@helper/logger';

import * as ErrorClass from './classes';

import type { ExpErrorRequestHandler } from '@app-types';

export const requestErrorHandler: ExpErrorRequestHandler = (error, request, response, _) => {
  logger.debug('Exception Handled %o', error);

  if (error instanceof ErrorClass.BadRequestError) {
    //Handle 400
    return response.sendBadHeaderResponse('Token Expired', error.headers);
  } else if (error instanceof UnauthorizedError) {
    //Handle 401
    return response.sendUnauthorizeResponse('Token Expired');
  } else if (error instanceof Error && 'code' in error && error.code === 'permission_denied') {
    //Handle 403
    return response.sendForbiddenResponse('Access denied');
  } else if (error instanceof ErrorClass.NotFoundError) {
    //Handle 404
    return response.sendNotFoundResponse(error.message);
  } else if (error instanceof ErrorClass.UnHandledError) {
    //Handle 417
    const { message, name, status, stack } = error;
    logger.error('Unexpected Happen %o', error);
    return response.sendExpectationFailed(message, { message, name, status, stack });
  } else if (error instanceof ErrorClass.ValidationError) {
    //Handle 422
    logger.info('Validation failed on %s errors: %o ', request.originalUrl, error.errors);
    return response.sendValidationFailureResponse(error.message, error.errors);
  } else {
    //Handle 500
    logger.error('Unknown Error Occurred');
    return response.sendServerErrorResponse('Unknown Exception', error as Record<string, string>);
  }
};

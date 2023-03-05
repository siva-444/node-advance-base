import logger from '@helper/logger';
import { authService } from '@services';

import type { ExpNxt, ExpRequest, ExpResponse, LoginRequest } from '@app-types';

export const loginUser = (request: LoginRequest, response: ExpResponse, next: ExpNxt) => {
  logger.debug('Calling login endpoint with body: %o', request.body);
  const { username, password } = request.body;
  authService
    .login(username, password)
    .then(({ user, ...extraData }) => {
      return response.sendSuccessResponse('Login success', user, extraData);
    })
    .catch((error) => {
      return next(error);
    });
};

export const refreshUserToken = (request: ExpRequest, response: ExpResponse, next: ExpNxt) => {
  logger.debug('Called /token/refresh endpoint');
  try {
    const { user_id } = request.tokenPayload;
    const { access_token, refresh_token } = authService.refreshUserToken(user_id);
    return response.sendSuccessResponse('Token refreshed', null, { access_token, refresh_token });
  } catch (error) {
    return next(error);
  }
};

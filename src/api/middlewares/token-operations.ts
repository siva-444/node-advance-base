import { expressjwt } from 'express-jwt';
import jwtPermission from 'express-jwt-permissions';

import CONFIG from '@config/index';

import type { ExpRequest } from '@app-types';

/**
 * We are assuming that the JWT will come in a header with the form
 *
 * Authorization: Bearer ${JWT}
 *
 */
const getTokenFromHeader = (request: ExpRequest) => {
  if (
    (request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Token') ||
    (request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return request.headers.authorization.split(' ')[1];
  }
  return;
};
const requestProperty = CONFIG.JWT.REQUEST_PROPERTY;
const extractTokenPayload = expressjwt({
  secret: CONFIG.JWT.SECRET, // The _secret_ to sign the JWTs
  algorithms: [
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
    'ES256',
    'ES384',
    'ES512',
    'PS256',
    'PS384',
    'PS512',
  ], // JWT Algorithm
  requestProperty, //Where to store the token payload in req object default it will be token ex:- req.token
  getToken: getTokenFromHeader, // How to extract the JWT from the request
});

const guard = jwtPermission({ requestProperty: requestProperty });
export { extractTokenPayload, guard };

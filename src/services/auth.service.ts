import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import CONFIG from '@config/index';
import { CONSTANTS, ErrorClasses, logger } from '@helpers';
import { UserModel } from '@models';

import type { TokenPayload } from '@app-types';
import type { SignOptions } from 'jsonwebtoken';

const { MODULES } = CONSTANTS.PERMISSIONS;

const generateToken = (user_payload: Partial<TokenPayload>, options?: SignOptions) => {
  const jwtPayload: Partial<TokenPayload> = {
    ...user_payload,
  };
  logger.silly(`Signing JWT token for user: %o`, jwtPayload);
  return sign(jwtPayload, CONFIG.JWT.SECRET, options);
};

export const generateAccessToken = (
  user_payload: Parameters<typeof generateToken>[0],
  expire_time: number = CONFIG.JWT.ACCESS_TOKEN_EXPIRE_IN_MS
) => {
  return generateToken(user_payload, {
    expiresIn: expire_time / 1000,
  });
};
export const generateRefreshToken = (
  user_payload: Parameters<typeof generateToken>[0],
  expire_time: number = CONFIG.JWT.ACCESS_TOKEN_EXPIRE_IN_MS
) => {
  user_payload.permissions = [MODULES.TOKEN_REFRESH];
  return generateToken(user_payload, {
    expiresIn: expire_time / 1000,
  });
};

export const login = async (
  username: string,
  password: string
): Promise<{
  user: { id: number };
  access_token: string;
  refresh_token?: string;
  tfa_meta?: Record<string, string | null | undefined>;
}> => {
  logger.silly('Fetching User Details for %s', username);
  const user = await UserModel.findOne({ where: { username } });
  logger.debug('user details of %s: %o', username, user);

  logger.silly('Checking the constraints of user login');
  if (user === null)
    throw new ErrorClasses.ValidationError({ username: 'Could not find the account' });
  else if (user.status === 0)
    throw new ErrorClasses.ValidationError({ username: 'Account was disabled' });
  else if (user.status === 2)
    throw new ErrorClasses.ValidationError({ username: 'Account not yet activated' });

  logger.silly('Checking password with user password hash');
  const isValidPassword = compareSync(password, user.password);
  if (!isValidPassword) throw new ErrorClasses.ValidationError({ password: 'Invalid password' });
  logger.info('Password is valid');

  // Create a user Session
  logger.silly('Generating JWT');

  const user_detailed_jwt_payload = {
    permissions: [MODULES.ALL],
  };

  const access_token = generateAccessToken(
    user_detailed_jwt_payload,
    CONFIG.JWT.ACCESS_TOKEN_EXPIRE_IN_MS
  );
  const refresh_token = generateRefreshToken(
    user_detailed_jwt_payload,
    CONFIG.JWT.REFRESH_TOKEN_EXPIRE_IN_MS
  );

  return { user: user, access_token, refresh_token };
};

export const refreshUserToken = (user_id: TokenPayload['user_id']) => {
  const user_detailed_jwt_payload = {
    user_id,
    permissions: [MODULES.ALL],
  };
  const access_token = generateAccessToken(
    user_detailed_jwt_payload,
    CONFIG.JWT.ACCESS_TOKEN_EXPIRE_IN_MS
  );
  const refresh_token = generateRefreshToken(
    user_detailed_jwt_payload,
    CONFIG.JWT.REFRESH_TOKEN_EXPIRE_IN_MS
  );
  return { access_token, refresh_token };
};

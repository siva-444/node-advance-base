import dotenv from 'dotenv';
import ms from 'ms';

import type { Algorithm } from 'jsonwebtoken';

// Set the NODE_ENV to 'development' by default
process.env['NODE_ENV'] = process.env['NODE_ENV'] ?? 'development';

const environmentFound = dotenv.config();
if (environmentFound.error) {
  // If any err occurred while loading env we need to throw error
  throw new Error("Couldn't find .env file");
}
const decimal = (value: string | undefined, default_value = 0) =>
  value ? Number.parseInt(value, 10) : default_value;
export default {
  PORT: decimal(process.env['PORT'], 3000),

  //Database
  DB_HOST: process.env['DB_HOST'] ?? '127.0.0.1',
  DB_PORT: decimal(process.env['DB_PORT'], 3306),
  DB_USER: process.env['DB_USER'] ?? 'root',
  DB_DATABASE: process.env['DB_DATABASE'] ?? 'open_close',
  DB_PASSWORD: process.env['DB_PASSWORD'] ?? '',
  DB_CONNECTION_LIMIT: decimal(process.env['DB_CONNECTION_LIMIT']),

  JWT: {
    SECRET: process.env['JWT_SECRET']!,
    ALGORITHM: process.env['JWT_ALGORITHM'] as Algorithm,
    ACCESS_TOKEN_EXPIRE_IN_MS: ms('5 Mins'),
    REFRESH_TOKEN_EXPIRE_IN_MS: ms('1 day'),
    REQUEST_PROPERTY: 'tokenPayload',
  },
  /**
   * Used by winston logger
   */
  LOGS: {
    LEVEL: process.env['LOG_LEVEL'] ?? 'silly',
  },

  /** Encryption  */
  AES: {
    KEY: process.env['aes_key'] ?? '',
    IV: process.env['aes_iv'] ?? '',
  },

  /** AWS Secrets */
  AWS: {
    ACCESS_KEY_ID: process.env['AWS_ACCESS_KEY_ID'] ?? '',
    SECRET_ACCESS_KEY: process.env['AWS_SECRET_ACCESS_KEY'] ?? '',
    BUCKET_NAME: process.env['AWS_BUCKET_NAME'] ?? '',
  },
};

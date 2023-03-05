// import mysql from 'mysql';
import mysql2 from 'mysql2';

import CONFIG from '@config/index';

import type { PoolOptions } from 'mysql2';

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD, DB_CONNECTION_LIMIT } = CONFIG;
const DB_CONFIG: PoolOptions = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: DB_CONNECTION_LIMIT,
};

export const pool = mysql2.createPool(DB_CONFIG);
// export const sql_promise: Pool = pool.promise();

// Multiple Query Pool
export const multiple_pool = mysql2.createPool({ ...DB_CONFIG, multipleStatements: true });
// export const sql_multiple_promise = multiple_pool.promise();

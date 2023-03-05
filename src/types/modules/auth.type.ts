import type { Request } from 'express';
import type { ParamsDictionary } from 'express-serve-static-core';
export interface LoginRequestBody {
  username: string;
  password: string;
}

export type LoginRequest = Request<ParamsDictionary, unknown, LoginRequestBody>;

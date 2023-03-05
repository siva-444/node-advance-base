import type { CONSTANTS } from '@helpers';
import type {
  Application,
  ErrorRequestHandler,
  NextFunction as ExpressNextFunction,
  Request,
  Response,
} from 'express';

export type ExpNxt = ExpressNextFunction;
export type ExpErrorRequestHandler = ErrorRequestHandler;
export type ExpRequest = Request;
export type ExpResponse = Response;
export type ExpApplication = Application;

export type ConstantsType = typeof CONSTANTS;

export interface PaginationMetaType {
  current_page: number;
  per_page: number;
  total_records: number;
  last_page: number;
}

export interface PaginationRequestQuery {
  page?: string | number;
  per_page?: string | number;
  utc_since_at?: string | null;
  meta?: '0' | '1' | number;
}
export interface TokenPayload {
  user_id: number;
  exp: number;
  permissions: string[];
}
export interface BinaryFileType extends ArrayBuffer {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
  // byteLength: number;
  // slice: unknown;
}

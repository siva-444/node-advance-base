import moment from 'moment';

import type { PaginationMetaType } from '@app-types';

export const MYSQL_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const MYSQL_DATE_FORMAT = 'YYYY-MM-DD';

export const getNowInSQLFormat = (only_date = false) =>
  only_date ? moment().format(MYSQL_DATE_FORMAT) : moment().format(MYSQL_DATETIME_FORMAT);

export const isValidSQLFormat = (date_value: string) =>
  moment(date_value, MYSQL_DATETIME_FORMAT, true).isValid();

export const getPaginationMeta = (
  total_records: number,
  page: number,
  per_page: number
): PaginationMetaType => ({
  current_page: page,
  total_records,
  last_page: Math.ceil(total_records / per_page),
  per_page,
});

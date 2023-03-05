import { createLogger, format, transports, config as winstonConfig } from 'winston';

import CONFIG from '@config/index';

const appTransports = [];
if (process.env['NODE_ENV'] !== 'development') {
  appTransports.push(new transports.Console());
} else {
  appTransports.push(
    new transports.Console({
      format: format.combine(format.cli(), format.splat()),
    })
  );
}

const LoggerInstance = createLogger({
  level: CONFIG.LOGS.LEVEL,
  levels: winstonConfig.npm.levels,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: appTransports,
});

export default LoggerInstance;

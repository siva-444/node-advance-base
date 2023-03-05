import { createServer } from 'node:http';

import express from 'express';
import ms from 'ms';
import { Server } from 'socket.io';

import CONFIG from './config';
import logger from './helpers/logger';
import loader from './loaders/index';
function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: `http://127.0.0.1:5173`,
      methods: ['GET', 'POST'],
    },
  });

  loader({ expressApp: app, io });

  const server = httpServer
    .listen(CONFIG.PORT, () => {
      logger.info(`
      ################################################
          Server listening on port: ${CONFIG.PORT}
      ################################################
    `);
    })
    .on('error', (error) => {
      logger.error(error);
      throw error;
    });

  server.setTimeout(ms('5 MINS'));

  process.on('unhandledRejection', (error, promise) => {
    logger.error('unhandledRejection', promise);
    logger.error('The error was:', error);
    process.exit(1);
  });
}

startServer();

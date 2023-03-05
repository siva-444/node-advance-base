import { notificationEventHandlers } from '@events';
import { logger } from '@helpers';

import type { Server, Socket } from 'socket.io';

const onConnection = (socket: Socket) => {
  logger.info('Socket Connected');
  notificationEventHandlers(socket);
};

export default (io: Server) => {
  io.on('connection', onConnection);
  logger.debug('connection::%o', onConnection);
};

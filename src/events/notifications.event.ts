import logger from '@helper/logger';

import type { Socket } from 'socket.io';

export default (socket: Socket) => {
  logger.info('Notification Socket : %o', socket.id);

  // Request Notifications
  socket.on('user/notifications', (user_id: number) => {
    logger.debug('User Id %o', user_id);
  });
};

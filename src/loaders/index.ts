import { logger } from '@helpers';

import expressLoader from './express';
import socketLoader from './socket';

import type { ExpApplication } from '@app-types';
import type { Server } from 'socket.io';

export default ({ expressApp, io }: { expressApp: ExpApplication; io: Server }) => {
  socketLoader(io);
  logger.info('Socket loaded');

  expressLoader({ app: expressApp });
  logger.info('Express loaded');
};

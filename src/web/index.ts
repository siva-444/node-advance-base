import { Router, static as expressStatic } from 'express';

import logger from '@helper/logger';
import { imageRoutes } from '@web-routes';

const client_path = 'client/dist';

const web = Router();

web.use('/image', imageRoutes);
web.use(expressStatic(client_path));
web.get('/*', (_, response) => {
  response.sendFile('index.html', { root: client_path }, (error) => {
    logger.error('Cannot load client build %o', error);
    response.sendFile('./public/maintain.html');
  });
});

export default web;

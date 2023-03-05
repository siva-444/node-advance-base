import compression from 'compression';
import cors from 'cors';
import { json, urlencoded } from 'express';
import helmet from 'helmet';

import apiRoutes from '@api';
import { ErrorClasses, requestErrorHandler, responseHandler } from '@helpers';
import webRoutes from '@web';

import type { Application } from 'express';

const ACCEPTED_CONTENT_TYPES_WHITELIST = new Set(['', 'application/json', 'multipart/form-data']);

export default ({ app }: { app: Application }) => {
  /**
   * @TODO Refer trust proxy in express
   */
  // app.enable('trust proxy');

  //Add extra care
  app.use(cors());
  app.use(compression());
  app.use(
    helmet({
      hidePoweredBy: true,
    })
  );

  /** Register Global response handlers */
  app.use(responseHandler);

  /** Extending request body size */
  app.use('/api/*', json({ limit: '65mb' }));
  app.use('/api/*', urlencoded({ limit: '65mb', extended: true }));

  /** Middleware for to make sure allowed content-type only we have process as per OWASP */
  app.use('/api/*', (request, response, next) => {
    const requestContentType = String(request.get('Content-Type') ?? '').toLowerCase();
    if (ACCEPTED_CONTENT_TYPES_WHITELIST.has(requestContentType)) {
      return next();
    }
    return response.status(400).json({ status: 'FAILED', message: 'Invalid Headers' });
  });

  /** API Documentation
   * @TODO refer
   * https://www.useoptic.com/blog/
   */

  // const options = {
  //   swaggerOptions: {
  //     authAction: {
  //       JWT: {
  //         name: 'JWT',
  //         schema: { type: 'apiKey', in: 'header', name: 'Authorization', description: '' },
  //         value: 'Bearer <JWT>',
  //       },
  //     },
  //   },
  // };
  // app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile, options));

  // Register routes
  app.use('/api', apiRoutes);
  app.use('/app', webRoutes);

  // catch 404 and forward to error handler
  app.use((request, _, next) => {
    next(new ErrorClasses.NotFoundError(request.originalUrl));
  });

  /**
   * All Errors are landed here
   * Ex:
   * next(new ErrorClasses.ValidationError())
   */
  app.use(requestErrorHandler);
};

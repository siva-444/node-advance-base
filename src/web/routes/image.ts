import { Router } from 'express';

const imageRoutes = Router();

imageRoutes.get('/:fileName', (request, response) => {
  const { params } = request;
  response.send(`uploads/${params.fileName}`);
});

export default imageRoutes;

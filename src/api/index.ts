import { Router } from 'express';

import authRoutes from '@api-route/auth';

const api = Router();
api.use('/auth', authRoutes);
export default api;

import { Router } from 'express';

import { authRoutes } from '@api-route/index.js';

const api = Router();
api.use('/auth', authRoutes);
api.get('/health', (req, res) => res.send('OK'));
export default api;

import { Router } from 'express';

import { guard } from '@api-middlewares';
import { authController } from '@controllers';
import { CONSTANTS } from '@helpers';
const { PERMISSIONS } = CONSTANTS;

const authRoutes = Router();

//Verify the required permissions contains in jwt payload
const guardTokenRefresh = guard.check([PERMISSIONS.MODULES.TOKEN_REFRESH]);

authRoutes.post('/login', authController.loginUser);
authRoutes.get(
  '/token/refresh',
  // extractTokenPayload,
  guardTokenRefresh,
  authController.refreshUserToken
);

export default authRoutes;

import { Sequelize } from 'sequelize';

import CONFIG from '@config/index';

import User from './user.model';

// Open database connection
const sequelize = new Sequelize(CONFIG.DB_DATABASE, CONFIG.DB_USER, CONFIG.DB_PASSWORD, {
  host: CONFIG.DB_HOST,
  port: Number.parseInt(CONFIG.DB_USER),
  dialect: 'mysql',
});

// Initialize each model in the database
// This must be done before associations are made
const models = [User];
for (const model of models) model.initialize(sequelize);

export { sequelize as Database };

export { default as UserModel } from './user.model';

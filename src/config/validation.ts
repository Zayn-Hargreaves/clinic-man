import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'test', ' production').required(),
  DB_TYPE: Joi.string().valid('postgres', 'mysql', 'mariadb').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().allow(''),
  DB_SSL: Joi.boolean().default(false),
});

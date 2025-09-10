// factory build options
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService, ConfigType } from '@nestjs/config';
import dbConfig from '../config/db.config';

export const createTypeOrmOptions = (
  cfg: ConfigService | ConfigType<typeof dbConfig>,
): TypeOrmModuleOptions => {
  const db =
    cfg instanceof ConfigService
      ? cfg.getOrThrow<ConfigType<typeof dbConfig>>('db')
      : cfg;

  return {
    type: db.type,
    host: db.host,
    port: db.port,
    username: db.username,
    password: db.password,
    database: db.database,
    ssl: db.ssl ? { rejectUnauthorized: false } : false,
    autoLoadEntities: true,
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
  };
};

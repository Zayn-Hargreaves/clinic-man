import { registerAs } from '@nestjs/config';

export type DbType = 'postgres' | 'mysql' | 'mariadb';

export default registerAs('db', () => ({
  type: process.env.DB_TYPE as DbType,
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME!,
  ssl: String(process.env.DB_SSL ?? '').toLowerCase() === 'true',
}));

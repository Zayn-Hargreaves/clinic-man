//// type orm database cho migration/cli

// src/database/datasource.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import configuration from '../config/configuration';

const cfg = configuration().db;

export default new DataSource({
  type: cfg.type,
  host: cfg.host,
  port: cfg.port,
  username: cfg.username,
  password: cfg.password,
  database: cfg.database,
  ssl: cfg.ssl ? { rejectUnauthorized: false } : false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
});

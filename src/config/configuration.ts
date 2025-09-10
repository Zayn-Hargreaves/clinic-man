export default () => ({
  env: process.env.NODE_ENV,
  db: {
    type: process.env.DB_TYPE as 'postgres' | 'mysql' | 'mariadb',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) | 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL === 'true',
  },
});

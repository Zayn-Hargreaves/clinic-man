import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from '../config/db.config';
import appConfig from '../config/app.config';
import configuration from '../config/configuration';
import { envValidationSchema } from '../config/validation';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, dbConfig, appConfig],
      envFilePath: [`.env.${process.env.NODE_ENV ?? 'development'}`, '.env'],
      validationSchema: envValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      inject: [dbConfig.KEY, appConfig.KEY],
      useFactory: (
        db: ConfigType<typeof dbConfig>,
        app: ConfigType<typeof appConfig>,
      ) => ({
        type: db.type,
        host: db.host,
        port: db.port,
        username: db.username,
        password: db.password,
        database: db.database,
        ssl: db.ssl ? { rejectUnauthorized: false } : false,
        autoLoadEntities: true,
        synchronize: false,
        logging: app.env !== 'production',
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

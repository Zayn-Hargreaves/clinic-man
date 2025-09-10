import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { Permission } from './entities/permission.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class PermissionsRepository extends BaseRepository<Permission> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Permission, dataSource, 'id');
  }
}

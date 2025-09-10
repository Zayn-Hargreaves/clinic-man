import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { RolePermission } from './entities/role-permission.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class RolePermissionRepository extends BaseRepository<RolePermission> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(RolePermission, dataSource, 'id');
  }
}

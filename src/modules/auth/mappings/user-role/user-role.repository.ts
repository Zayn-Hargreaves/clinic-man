import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { UserRole } from './entities/user-role.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRoleRepository extends BaseRepository<UserRole> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(UserRole, dataSource, 'id');
  }
}

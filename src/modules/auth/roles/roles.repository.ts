import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { Role } from './entities/role.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class RolesRepository extends BaseRepository<Role> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Role, dataSource, 'id');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsRepository extends BaseRepository<Department> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Department, dataSource, 'id');
  }
}

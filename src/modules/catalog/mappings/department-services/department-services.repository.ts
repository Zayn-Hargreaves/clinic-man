import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { DepartmentService } from './entities/department-service.entity';

@Injectable()
export class DepartmentServicesRepository extends BaseRepository<DepartmentService> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(DepartmentService, dataSource, 'id');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { LabTest } from './entities/lab-test.entity';

@Injectable()
export class LabTestsRepository extends BaseRepository<LabTest> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(LabTest, dataSource, 'id');
  }
}

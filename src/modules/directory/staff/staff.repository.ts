import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffRepository extends BaseRepository<Staff> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Staff, dataSource, 'id');
  }
}

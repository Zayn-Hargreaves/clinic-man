import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { StaffPayroll } from './entities/staff-payroll.entity';

@Injectable()
export class StaffPayrollsRepository extends BaseRepository<StaffPayroll> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(StaffPayroll, dataSource, 'id');
  }
}

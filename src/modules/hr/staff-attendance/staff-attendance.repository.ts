import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { StaffAttendance } from './entities/staff-attendance.entity';

@Injectable()
export class StaffAttendanceRepository extends BaseRepository<StaffAttendance> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(StaffAttendance, dataSource, 'id');
  }
}

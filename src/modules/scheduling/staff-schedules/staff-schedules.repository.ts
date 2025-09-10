import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { StaffSchedule } from './entities/staff-schedule.entity';

@Injectable()
export class StaffSchedulesRepository extends BaseRepository<StaffSchedule> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(StaffSchedule, dataSource, 'id');
  }
}

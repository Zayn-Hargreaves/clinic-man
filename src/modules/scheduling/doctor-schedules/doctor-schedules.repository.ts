import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { DoctorSchedule } from './entities/doctor-schedule.entity';

@Injectable()
export class DoctorSchedulesRepository extends BaseRepository<DoctorSchedule> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(DoctorSchedule, dataSource, 'id');
  }
}

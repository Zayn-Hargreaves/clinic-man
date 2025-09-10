import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { Appointment } from './entities/appointment.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AppointmentsRepository extends BaseRepository<Appointment> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Appointment, dataSource, 'id');
  }
}

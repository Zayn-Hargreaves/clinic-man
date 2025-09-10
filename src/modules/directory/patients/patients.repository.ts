import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import { DataSource } from 'typeorm';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsRepository extends BaseRepository<Patient> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Appointment, dataSource, 'id');
  }
}

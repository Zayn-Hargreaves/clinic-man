import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class DoctorRepository extends BaseRepository<Doctor> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Doctor, dataSource, 'id');
  }
}

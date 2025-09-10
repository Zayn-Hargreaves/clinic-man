import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { DoctorService } from './entities/doctor-service.entity';

@Injectable()
export class DoctorServicesRepository extends BaseRepository<DoctorService> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(DoctorService, dataSource, 'id');
  }
}

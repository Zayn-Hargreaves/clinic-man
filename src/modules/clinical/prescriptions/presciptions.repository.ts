import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Prescription } from './entities/prescription.entity';

@Injectable()
export class PrescriptionsRepository extends BaseRepository<Prescription> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Prescription, dataSource, 'id');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Medication } from './entities/medication.entity';

@Injectable()
export class MedicationsRepository extends BaseRepository<Medication> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Medication, dataSource, 'id');
  }
}

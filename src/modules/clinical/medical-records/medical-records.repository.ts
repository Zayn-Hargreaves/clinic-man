import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { MedicalRecord } from './entities/medical-record.entity';

@Injectable()
export class MedicalRecordsRepository extends BaseRepository<MedicalRecord> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(MedicalRecord, dataSource, 'id');
  }
}

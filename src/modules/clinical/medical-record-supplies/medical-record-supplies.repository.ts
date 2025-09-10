import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { MedicalRecordSupply } from './entities/medical-record-supply.entity';

@Injectable()
export class MedicalRecordSuppliesRepository extends BaseRepository<MedicalRecordSupply> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(MedicalRecordSupply, dataSource, 'id');
  }
}

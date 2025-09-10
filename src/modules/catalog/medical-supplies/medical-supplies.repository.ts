import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { MedicalSupply } from './entities/medical-supply.entity';

@Injectable()
export class MedicalSuppliesRepository extends BaseRepository<MedicalSupply> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(MedicalSupply, dataSource, 'id');
  }
}

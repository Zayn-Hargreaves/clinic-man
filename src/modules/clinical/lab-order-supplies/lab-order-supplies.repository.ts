import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { LabOrderSupply } from './entities/lab-order-supply.entity';

@Injectable()
export class LabOrderSuppliesRepository extends BaseRepository<LabOrderSupply> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(LabOrderSupply, dataSource, 'id');
  }
}

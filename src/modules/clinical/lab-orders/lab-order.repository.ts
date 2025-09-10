import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { LabOrder } from './entities/lab-order.entity';

@Injectable()
export class LabOrderRepository extends BaseRepository<LabOrder> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(LabOrder, dataSource, 'id');
  }
}

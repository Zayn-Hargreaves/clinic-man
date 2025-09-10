import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { PharmacySale } from './entities/pharmacy-sale.entity';

@Injectable()
export class PharmarcySalesRepository extends BaseRepository<PharmacySale> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(PharmacySale, dataSource, 'id');
  }
}

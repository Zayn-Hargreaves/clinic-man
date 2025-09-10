import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SupplierRepository extends BaseRepository<Supplier> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Supplier, dataSource, 'id');
  }
}

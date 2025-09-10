import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { SupplierItem } from './entities/supplier-item.entity';

@Injectable()
export class SupplierItemsRepository extends BaseRepository<SupplierItem> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(SupplierItem, dataSource, 'id');
  }
}

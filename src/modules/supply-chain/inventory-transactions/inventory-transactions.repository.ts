import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { InventoryTransaction } from './entities/inventory-transaction.entity';

@Injectable()
export class InventoryTransactionsRepository extends BaseRepository<InventoryTransaction> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(InventoryTransaction, dataSource, 'id');
  }
}

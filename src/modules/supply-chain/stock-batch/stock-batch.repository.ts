import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { StockBatch } from './entities/stock-batch.entity';

@Injectable()
export class StockBatchRepository extends BaseRepository<StockBatch> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(StockBatch, dataSource, 'id');
  }
}

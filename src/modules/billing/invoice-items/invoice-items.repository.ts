import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { InvoiceItem } from './entities/invoice-item.entity';

@Injectable()
export class InvoiceItemsRepository extends BaseRepository<InvoiceItem> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(InvoiceItem, dataSource, 'id');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { EInvoice } from './entities/e-invoice.entity';

@Injectable()
export class EInvoiceRepository extends BaseRepository<EInvoice> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(EInvoice, dataSource, 'id');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesRepository extends BaseRepository<Invoice> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Invoice, dataSource, 'id');
  }
}

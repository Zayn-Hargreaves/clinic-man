import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsRepository extends BaseRepository<Payment> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Payment, dataSource, 'id');
  }
}

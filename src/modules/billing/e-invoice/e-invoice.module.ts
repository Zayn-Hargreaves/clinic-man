import { Module } from '@nestjs/common';
import { EInvoiceService } from './e-invoice.service';
import { EInvoiceController } from './e-invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EInvoice } from './entities/e-invoice.entity';
import { EInvoiceRepository } from './e-invoice.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EInvoice])],
  controllers: [EInvoiceController],
  providers: [EInvoiceService, EInvoiceRepository],
  exports: [EInvoiceRepository],
})
export class EInvoiceModule {}

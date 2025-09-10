import { Module } from '@nestjs/common';
import { InvoiceItemsService } from './invoice-items.service';
import { InvoiceItemsController } from './invoice-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItem } from './entities/invoice-item.entity';
import { InvoiceItemsRepository } from './invoice-items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceItem])],
  controllers: [InvoiceItemsController],
  providers: [InvoiceItemsService, InvoiceItemsRepository],
  exports: [InvoiceItemsRepository],
})
export class InvoiceItemsModule {}

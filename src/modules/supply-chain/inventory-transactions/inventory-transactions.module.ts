import { Module } from '@nestjs/common';
import { InventoryTranactionsService } from './inventory-transactions.service';
import { InventoryTranactionsController } from './inventory-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryTransaction } from './entities/inventory-transaction.entity';
import { InventoryTransactionsRepository } from './inventory-transactions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryTransaction])],
  controllers: [InventoryTranactionsController],
  providers: [InventoryTranactionsService, InventoryTransactionsRepository],
  exports: [InventoryTransactionsRepository],
})
export class InventoryTranactionsModule {}

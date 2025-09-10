import { SuppliersModule } from './suppliers/suppliers.module';
import { SupplierItemsModule } from './supplier-items/supplier-items.module';
import { InventoryTranactionsModule } from './inventory-transactions/inventory-transactions.module';
import { StockBatchModule } from './stock-batch/stock-batch.module';
import { Module } from '@nestjs/common';
import { SupplyChainService } from './supply-chain.service';

@Module({
  imports: [
    InventoryTranactionsModule,
    StockBatchModule,
    SupplierItemsModule,
    SuppliersModule,
  ],
  providers: [SupplyChainService],
})
export class SupplyChainModule {}

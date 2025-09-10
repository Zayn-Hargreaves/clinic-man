import { Module } from '@nestjs/common';
import { SupplierItemsService } from './supplier-items.service';
import { SupplierItemsController } from './supplier-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierItem } from './entities/supplier-item.entity';
import { SupplierItemsRepository } from './supplier-items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierItem])],
  controllers: [SupplierItemsController],
  providers: [SupplierItemsService, SupplierItemsRepository],
  exports: [SupplierItemsRepository],
})
export class SupplierItemsModule {}

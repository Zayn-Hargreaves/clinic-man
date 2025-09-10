import { Module } from '@nestjs/common';
import { StockBatchService } from './stock-batch.service';
import { StockBatchController } from './stock-batch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockBatch } from './entities/stock-batch.entity';
import { StockBatchRepository } from './stock-batch.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StockBatch])],
  controllers: [StockBatchController],
  providers: [StockBatchService, StockBatchRepository],
  exports: [StockBatchRepository],
})
export class StockBatchModule {}

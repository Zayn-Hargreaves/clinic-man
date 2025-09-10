import { Module } from '@nestjs/common';
import { PharmacySalesService } from './pharmacy-sales.service';
import { PharmacySalesController } from './pharmacy-sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmacySale } from './entities/pharmacy-sale.entity';
import { PharmarcySalesRepository } from './pharmacy-sales.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PharmacySale])],
  controllers: [PharmacySalesController],
  providers: [PharmacySalesService, PharmarcySalesRepository],
  exports: [PharmarcySalesRepository],
})
export class PharmacySalesModule {}

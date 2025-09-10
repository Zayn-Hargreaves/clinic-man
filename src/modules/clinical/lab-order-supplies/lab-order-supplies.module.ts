import { Module } from '@nestjs/common';
import { LabOrderSuppliesService } from './lab-order-supplies.service';
import { LabOrderSuppliesController } from './lab-order-supplies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabOrderSupply } from './entities/lab-order-supply.entity';
import { LabOrderSuppliesRepository } from './lab-order-supplies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LabOrderSupply])],
  controllers: [LabOrderSuppliesController],
  providers: [LabOrderSuppliesService, LabOrderSuppliesRepository],
  exports: [LabOrderSuppliesRepository],
})
export class LabOrderSuppliesModule {}

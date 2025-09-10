import { Module } from '@nestjs/common';
import { LabOrdersService } from './lab-orders.service';
import { LabOrdersController } from './lab-orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabOrder } from './entities/lab-order.entity';
import { LabOrderRepository } from './lab-order.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LabOrder])],
  controllers: [LabOrdersController],
  providers: [LabOrdersService, LabOrderRepository],
  exports: [LabOrderRepository],
})
export class LabOrdersModule {}

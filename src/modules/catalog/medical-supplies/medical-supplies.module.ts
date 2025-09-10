import { Module } from '@nestjs/common';
import { MedicalSuppliesService } from './medical-supplies.service';
import { MedicalSuppliesController } from './medical-supplies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalSupply } from './entities/medical-supply.entity';
import { MedicalSuppliesRepository } from './medical-supplies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalSupply])],
  controllers: [MedicalSuppliesController],
  providers: [MedicalSuppliesService, MedicalSuppliesRepository],
  exports: [MedicalSuppliesRepository],
})
export class MedicalSuppliesModule {}

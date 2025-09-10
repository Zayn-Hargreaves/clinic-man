import { Module } from '@nestjs/common';
import { MedicalRecordSuppliesService } from './medical-record-supplies.service';
import { MedicalRecordSuppliesController } from './medical-record-supplies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecordSupply } from './entities/medical-record-supply.entity';
import { MedicalRecordSuppliesRepository } from './medical-record-supplies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecordSupply])],
  controllers: [MedicalRecordSuppliesController],
  providers: [MedicalRecordSuppliesService, MedicalRecordSuppliesRepository],
  exports: [MedicalRecordSuppliesRepository],
})
export class MedicalRecordSuppliesModule {}

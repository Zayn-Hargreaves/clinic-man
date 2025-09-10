import { Module } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecordsController } from './medical-records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecord } from './entities/medical-record.entity';
import { MedicalRecordsRepository } from './medical-records.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecord])],
  controllers: [MedicalRecordsController],
  providers: [MedicalRecordsService, MedicalRecordsRepository],
  exports: [MedicalRecordsRepository],
})
export class MedicalRecordsModule {}

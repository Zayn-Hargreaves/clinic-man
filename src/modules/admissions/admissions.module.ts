import { Module } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { AdmissionsController } from './admissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admission } from './entities/admission.entity';
import { AdmissionsRepository } from './admissions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Admission])],
  controllers: [AdmissionsController],
  providers: [AdmissionsService, AdmissionsRepository],
  exports: [AdmissionsRepository],
})
export class AdmissionsModule {}

import { Module } from '@nestjs/common';
import { DoctorServicesService } from './doctor-services.service';
import { DoctorServicesController } from './doctor-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorService } from './entities/doctor-service.entity';
import { DoctorServicesRepository } from './doctor-services.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorService])],
  controllers: [DoctorServicesController],
  providers: [DoctorServicesService, DoctorServicesRepository],
  exports: [DoctorServicesRepository],
})
export class DoctorServicesModule {}

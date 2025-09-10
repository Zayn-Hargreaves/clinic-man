import { Module } from '@nestjs/common';
import { DoctorSchedulesService } from './doctor-schedules.service';
import { DoctorSchedulesController } from './doctor-schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorSchedule } from './entities/doctor-schedule.entity';
import { DoctorSchedulesRepository } from './doctor-schedules.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorSchedule])],
  controllers: [DoctorSchedulesController],
  providers: [DoctorSchedulesService, DoctorSchedulesRepository],
  exports: [DoctorSchedulesRepository],
})
export class DoctorSchedulesModule {}

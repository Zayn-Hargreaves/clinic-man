import { Module } from '@nestjs/common';
import { StaffSchedulesService } from './staff-schedules.service';
import { StaffSchedulesController } from './staff-schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffSchedule } from './entities/staff-schedule.entity';
import { StaffSchedulesRepository } from './staff-schedules.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StaffSchedule])],
  controllers: [StaffSchedulesController],
  providers: [StaffSchedulesService, StaffSchedulesRepository],
  exports: [StaffSchedulesRepository],
})
export class StaffSchedulesModule {}

import { Module } from '@nestjs/common';
import { DoctorSchedulesModule } from './doctor-schedules/doctor-schedules.module';
import { StaffSchedulesModule } from './staff-schedules/staff-schedules.module';
import { SchedulingService } from './scheduling.service';

@Module({
  imports: [DoctorSchedulesModule, StaffSchedulesModule],
  providers: [SchedulingService],
})
export class SchedulingModule {}

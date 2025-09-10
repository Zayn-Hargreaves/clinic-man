import { Module } from '@nestjs/common';
import { StaffAttendanceService } from './staff-attendance.service';
import { StaffAttendanceController } from './staff-attendance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffAttendance } from './entities/staff-attendance.entity';
import { StaffAttendanceRepository } from './staff-attendance.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StaffAttendance])],
  controllers: [StaffAttendanceController],
  providers: [StaffAttendanceService, StaffAttendanceRepository],
  exports: [StaffAttendanceRepository],
})
export class StaffAttendanceModule {}

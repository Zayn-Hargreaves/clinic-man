import { Module } from '@nestjs/common';
import { StaffAttendanceModule } from './staff-attendance/staff-attendance.module';
import { StaffPayrollsModule } from './staff-payrolls/staff-payrolls.module';
import { HrService } from './hr.service';

@Module({
  imports: [StaffAttendanceModule, StaffPayrollsModule],
  providers: [HrService],
})
export class HrModule {}

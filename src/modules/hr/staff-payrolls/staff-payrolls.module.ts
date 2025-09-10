import { Module } from '@nestjs/common';
import { StaffPayrollsService } from './staff-payrolls.service';
import { StaffPayrollsController } from './staff-payrolls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffPayroll } from './entities/staff-payroll.entity';
import { StaffPayrollsRepository } from './staff-payrolls.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StaffPayroll])],
  controllers: [StaffPayrollsController],
  providers: [StaffPayrollsService, StaffPayrollsRepository],
  exports: [StaffPayrollsRepository],
})
export class StaffPayrollsModule {}

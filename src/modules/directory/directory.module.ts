import { DoctorModule } from './doctor/doctor.module';
import { PatientsModule } from './patients/patients.module';
import { StaffModule } from './staff/staff.module';
import { DepartmentsModule } from './departments/departments.module';
import { Module } from '@nestjs/common';
import { DirectoryService } from './directory.service';

@Module({
  imports: [DepartmentsModule, DoctorModule, PatientsModule, StaffModule],
  providers: [DirectoryService],
})
export class DirectoryModule {}

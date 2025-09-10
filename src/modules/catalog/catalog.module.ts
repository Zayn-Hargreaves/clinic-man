import { ServicesModule } from './services/services.module';
import { LabTestsModule } from './lab-tests/lab-tests.module';
import { MedicationsModule } from './medications/medications.module';
import { MedicalSuppliesModule } from './medical-supplies/medical-supplies.module';
import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { DepartmentServicesModule } from './mappings/department-services/department-services.module';
import { DoctorServicesModule } from './mappings/doctor-services/doctor-services.module';

@Module({
  imports: [
    LabTestsModule,
    DepartmentServicesModule,
    DoctorServicesModule,
    MedicalSuppliesModule,
    MedicationsModule,
    ServicesModule,
  ],
  // controllers:[]
  providers: [CatalogService],
})
export class CatalogModule {}

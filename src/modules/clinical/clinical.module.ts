import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { LabOrdersModule } from './lab-orders/lab-orders.module';
import { MedicalRecordSuppliesModule } from './medical-record-supplies/medical-record-supplies.module';
import { LabOrderSuppliesModule } from './lab-order-supplies/lab-order-supplies.module';
import { Module } from '@nestjs/common';
import { ClinicalService } from './clinical.service';

@Module({
  imports: [
    LabOrderSuppliesModule,
    LabOrdersModule,
    MedicalRecordSuppliesModule,
    MedicalRecordsModule,
    PrescriptionsModule,
  ],
  providers: [ClinicalService],
})
export class ClinicalModule {}

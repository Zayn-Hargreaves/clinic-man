import { Module } from '@nestjs/common';
import { AdmissionsModule } from './modules/admissions/admissions.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { AuthModule } from './modules/auth/auth.module';
import { BillingModule } from './modules/billing/billing.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { ClinicalModule } from './modules/clinical/clinical.module';
import { CoreModule } from './modules/core/core.module';
import { DirectoryModule } from './modules/directory/directory.module';
import { FacilityModule } from './modules/facility/facility.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { HrModule } from './modules/hr/hr.module';
import { PharmacySalesModule } from './modules/pharmacy-sales/pharmacy-sales.module';
import { SchedulingModule } from './modules/scheduling/scheduling.module';
import { SharedModule } from './modules/shared/shared.module';
import { SupplyChainModule } from './modules/supply-chain/supply-chain.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AdmissionsModule,
    AppointmentsModule,
    AuthModule,
    BillingModule,
    CatalogModule,
    ClinicalModule,
    CoreModule,
    DirectoryModule,
    FacilityModule,
    FeedbackModule,
    HrModule,
    PharmacySalesModule,
    SchedulingModule,
    SharedModule,
    SupplyChainModule,
    UsersModule,
  ],
})
export class AppModule {}

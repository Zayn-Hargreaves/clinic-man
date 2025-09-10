import { RoomsModule } from './rooms/rooms.module';
import { BedsModule } from './beds/beds.module';
import { ExamtablesModule } from './examtables/examtables.module';
import { SlotsModule } from './slots/slots.module';
import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';

@Module({
  imports: [BedsModule, ExamtablesModule, RoomsModule, SlotsModule],
  providers: [FacilityService],
})
export class FacilityModule {}

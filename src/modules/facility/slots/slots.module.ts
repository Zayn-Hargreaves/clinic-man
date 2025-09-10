import { Module } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { SlotsController } from './slots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slot } from './entities/slot.entity';
import { SlotsRepository } from './Slots.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Slot])],
  controllers: [SlotsController],
  providers: [SlotsService, SlotsRepository],
  exports: [SlotsRepository],
})
export class SlotsModule {}

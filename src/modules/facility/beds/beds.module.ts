import { Module } from '@nestjs/common';
import { BedsService } from './beds.service';
import { BedsController } from './beds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bed } from './entities/bed.entity';
import { BedsRepository } from './beds.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Bed])],
  controllers: [BedsController],
  providers: [BedsService, BedsRepository],
  exports: [BedsRepository],
})
export class BedsModule {}

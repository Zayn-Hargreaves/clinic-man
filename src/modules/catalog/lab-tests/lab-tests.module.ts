import { Module } from '@nestjs/common';
import { LabTestsService } from './lab-tests.service';
import { LabTestsController } from './lab-tests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabTest } from './entities/lab-test.entity';
import { LabTestsRepository } from './lab_tests.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LabTest])],
  controllers: [LabTestsController],
  providers: [LabTestsService, LabTestsRepository],
  exports: [LabTestsRepository],
})
export class LabTestsModule {}

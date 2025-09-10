import { Module } from '@nestjs/common';
import { DepartmentServicesService } from './department-services.service';
import { DepartmentServicesController } from './department-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentService } from './entities/department-service.entity';
import { DepartmentServicesRepository } from './department-services.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentService])],
  controllers: [DepartmentServicesController],
  providers: [DepartmentServicesService, DepartmentServicesRepository],
  exports: [DepartmentServicesRepository],
})
export class DepartmentServicesModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentServicesController } from './department-services.controller';
import { DepartmentServicesService } from './department-services.service';

describe('DepartmentServicesController', () => {
  let controller: DepartmentServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentServicesController],
      providers: [DepartmentServicesService],
    }).compile();

    controller = module.get<DepartmentServicesController>(DepartmentServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

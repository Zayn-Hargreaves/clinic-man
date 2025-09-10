import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentServicesService } from './department-services.service';

describe('DepartmentServicesService', () => {
  let service: DepartmentServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentServicesService],
    }).compile();

    service = module.get<DepartmentServicesService>(DepartmentServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

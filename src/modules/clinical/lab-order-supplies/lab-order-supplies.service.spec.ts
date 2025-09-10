import { Test, TestingModule } from '@nestjs/testing';
import { LabOrderSuppliesService } from './lab-order-supplies.service';

describe('LabOrderSuppliesService', () => {
  let service: LabOrderSuppliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabOrderSuppliesService],
    }).compile();

    service = module.get<LabOrderSuppliesService>(LabOrderSuppliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

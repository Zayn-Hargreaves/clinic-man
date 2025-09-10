import { Test, TestingModule } from '@nestjs/testing';
import { MedicalSuppliesService } from './medical-supplies.service';

describe('MedicalSuppliesService', () => {
  let service: MedicalSuppliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalSuppliesService],
    }).compile();

    service = module.get<MedicalSuppliesService>(MedicalSuppliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

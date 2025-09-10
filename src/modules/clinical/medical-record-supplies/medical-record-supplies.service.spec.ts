import { Test, TestingModule } from '@nestjs/testing';
import { MedicalRecordSuppliesService } from './medical-record-supplies.service';

describe('MedicalRecordSuppliesService', () => {
  let service: MedicalRecordSuppliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalRecordSuppliesService],
    }).compile();

    service = module.get<MedicalRecordSuppliesService>(MedicalRecordSuppliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

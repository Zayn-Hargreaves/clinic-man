import { Test, TestingModule } from '@nestjs/testing';
import { DoctorServicesService } from './doctor-services.service';

describe('DoctorServicesService', () => {
  let service: DoctorServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorServicesService],
    }).compile();

    service = module.get<DoctorServicesService>(DoctorServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

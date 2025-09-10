import { Test, TestingModule } from '@nestjs/testing';
import { PharmacySalesService } from './pharmacy-sales.service';

describe('PharmacySalesService', () => {
  let service: PharmacySalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacySalesService],
    }).compile();

    service = module.get<PharmacySalesService>(PharmacySalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

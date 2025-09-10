import { Test, TestingModule } from '@nestjs/testing';
import { StaffPayrollsService } from './staff-payrolls.service';

describe('StaffPayrollsService', () => {
  let service: StaffPayrollsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffPayrollsService],
    }).compile();

    service = module.get<StaffPayrollsService>(StaffPayrollsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

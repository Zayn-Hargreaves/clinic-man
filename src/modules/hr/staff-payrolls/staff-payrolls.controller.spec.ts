import { Test, TestingModule } from '@nestjs/testing';
import { StaffPayrollsController } from './staff-payrolls.controller';
import { StaffPayrollsService } from './staff-payrolls.service';

describe('StaffPayrollsController', () => {
  let controller: StaffPayrollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffPayrollsController],
      providers: [StaffPayrollsService],
    }).compile();

    controller = module.get<StaffPayrollsController>(StaffPayrollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

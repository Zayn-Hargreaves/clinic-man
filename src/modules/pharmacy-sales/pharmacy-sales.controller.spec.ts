import { Test, TestingModule } from '@nestjs/testing';
import { PharmacySalesController } from './pharmacy-sales.controller';
import { PharmacySalesService } from './pharmacy-sales.service';

describe('PharmacySalesController', () => {
  let controller: PharmacySalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacySalesController],
      providers: [PharmacySalesService],
    }).compile();

    controller = module.get<PharmacySalesController>(PharmacySalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LabOrderSuppliesController } from './lab-order-supplies.controller';
import { LabOrderSuppliesService } from './lab-order-supplies.service';

describe('LabOrderSuppliesController', () => {
  let controller: LabOrderSuppliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabOrderSuppliesController],
      providers: [LabOrderSuppliesService],
    }).compile();

    controller = module.get<LabOrderSuppliesController>(LabOrderSuppliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

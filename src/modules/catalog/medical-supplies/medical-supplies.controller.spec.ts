import { Test, TestingModule } from '@nestjs/testing';
import { MedicalSuppliesController } from './medical-supplies.controller';
import { MedicalSuppliesService } from './medical-supplies.service';

describe('MedicalSuppliesController', () => {
  let controller: MedicalSuppliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalSuppliesController],
      providers: [MedicalSuppliesService],
    }).compile();

    controller = module.get<MedicalSuppliesController>(MedicalSuppliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

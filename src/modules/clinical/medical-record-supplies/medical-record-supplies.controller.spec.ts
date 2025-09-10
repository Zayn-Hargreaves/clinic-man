import { Test, TestingModule } from '@nestjs/testing';
import { MedicalRecordSuppliesController } from './medical-record-supplies.controller';
import { MedicalRecordSuppliesService } from './medical-record-supplies.service';

describe('MedicalRecordSuppliesController', () => {
  let controller: MedicalRecordSuppliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalRecordSuppliesController],
      providers: [MedicalRecordSuppliesService],
    }).compile();

    controller = module.get<MedicalRecordSuppliesController>(MedicalRecordSuppliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DoctorServicesController } from './doctor-services.controller';
import { DoctorServicesService } from './doctor-services.service';

describe('DoctorServicesController', () => {
  let controller: DoctorServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorServicesController],
      providers: [DoctorServicesService],
    }).compile();

    controller = module.get<DoctorServicesController>(DoctorServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

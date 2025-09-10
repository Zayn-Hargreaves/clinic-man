import { Test, TestingModule } from '@nestjs/testing';
import { StaffAttendanceController } from './staff-attendance.controller';
import { StaffAttendanceService } from './staff-attendance.service';

describe('StaffAttendanceController', () => {
  let controller: StaffAttendanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffAttendanceController],
      providers: [StaffAttendanceService],
    }).compile();

    controller = module.get<StaffAttendanceController>(StaffAttendanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

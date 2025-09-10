import { Injectable } from '@nestjs/common';
import { CreateStaffScheduleDto } from './dto/create-staff-schedule.dto';
import { UpdateStaffScheduleDto } from './dto/update-staff-schedule.dto';

@Injectable()
export class StaffSchedulesService {
  create(createStaffScheduleDto: CreateStaffScheduleDto) {
    return 'This action adds a new staffSchedule';
  }

  findAll() {
    return `This action returns all staffSchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staffSchedule`;
  }

  update(id: number, updateStaffScheduleDto: UpdateStaffScheduleDto) {
    return `This action updates a #${id} staffSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} staffSchedule`;
  }
}

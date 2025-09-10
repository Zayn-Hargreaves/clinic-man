import { Injectable } from '@nestjs/common';
import { CreateStaffAttendanceDto } from './dto/create-staff-attendance.dto';
import { UpdateStaffAttendanceDto } from './dto/update-staff-attendance.dto';

@Injectable()
export class StaffAttendanceService {
  create(createStaffAttendanceDto: CreateStaffAttendanceDto) {
    return 'This action adds a new staffAttendance';
  }

  findAll() {
    return `This action returns all staffAttendance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staffAttendance`;
  }

  update(id: number, updateStaffAttendanceDto: UpdateStaffAttendanceDto) {
    return `This action updates a #${id} staffAttendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} staffAttendance`;
  }
}

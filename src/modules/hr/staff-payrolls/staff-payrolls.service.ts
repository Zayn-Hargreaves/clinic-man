import { Injectable } from '@nestjs/common';
import { CreateStaffPayrollDto } from './dto/create-staff-payroll.dto';
import { UpdateStaffPayrollDto } from './dto/update-staff-payroll.dto';

@Injectable()
export class StaffPayrollsService {
  create(createStaffPayrollDto: CreateStaffPayrollDto) {
    return 'This action adds a new staffPayroll';
  }

  findAll() {
    return `This action returns all staffPayrolls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staffPayroll`;
  }

  update(id: number, updateStaffPayrollDto: UpdateStaffPayrollDto) {
    return `This action updates a #${id} staffPayroll`;
  }

  remove(id: number) {
    return `This action removes a #${id} staffPayroll`;
  }
}

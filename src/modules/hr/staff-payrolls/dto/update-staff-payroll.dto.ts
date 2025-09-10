import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffPayrollDto } from './create-staff-payroll.dto';

export class UpdateStaffPayrollDto extends PartialType(CreateStaffPayrollDto) {}

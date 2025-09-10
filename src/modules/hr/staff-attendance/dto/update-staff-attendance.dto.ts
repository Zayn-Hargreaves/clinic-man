import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffAttendanceDto } from './create-staff-attendance.dto';

export class UpdateStaffAttendanceDto extends PartialType(CreateStaffAttendanceDto) {}

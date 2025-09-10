import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffAttendanceService } from './staff-attendance.service';
import { CreateStaffAttendanceDto } from './dto/create-staff-attendance.dto';
import { UpdateStaffAttendanceDto } from './dto/update-staff-attendance.dto';

@Controller('staff-attendance')
export class StaffAttendanceController {
  constructor(private readonly staffAttendanceService: StaffAttendanceService) {}

  @Post()
  create(@Body() createStaffAttendanceDto: CreateStaffAttendanceDto) {
    return this.staffAttendanceService.create(createStaffAttendanceDto);
  }

  @Get()
  findAll() {
    return this.staffAttendanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffAttendanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffAttendanceDto: UpdateStaffAttendanceDto) {
    return this.staffAttendanceService.update(+id, updateStaffAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffAttendanceService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffSchedulesService } from './staff-schedules.service';
import { CreateStaffScheduleDto } from './dto/create-staff-schedule.dto';
import { UpdateStaffScheduleDto } from './dto/update-staff-schedule.dto';

@Controller('staff-schedules')
export class StaffSchedulesController {
  constructor(private readonly staffSchedulesService: StaffSchedulesService) {}

  @Post()
  create(@Body() createStaffScheduleDto: CreateStaffScheduleDto) {
    return this.staffSchedulesService.create(createStaffScheduleDto);
  }

  @Get()
  findAll() {
    return this.staffSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffScheduleDto: UpdateStaffScheduleDto) {
    return this.staffSchedulesService.update(+id, updateStaffScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffSchedulesService.remove(+id);
  }
}

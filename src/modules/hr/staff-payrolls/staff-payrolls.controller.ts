import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffPayrollsService } from './staff-payrolls.service';
import { CreateStaffPayrollDto } from './dto/create-staff-payroll.dto';
import { UpdateStaffPayrollDto } from './dto/update-staff-payroll.dto';

@Controller('staff-payrolls')
export class StaffPayrollsController {
  constructor(private readonly staffPayrollsService: StaffPayrollsService) {}

  @Post()
  create(@Body() createStaffPayrollDto: CreateStaffPayrollDto) {
    return this.staffPayrollsService.create(createStaffPayrollDto);
  }

  @Get()
  findAll() {
    return this.staffPayrollsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffPayrollsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffPayrollDto: UpdateStaffPayrollDto) {
    return this.staffPayrollsService.update(+id, updateStaffPayrollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffPayrollsService.remove(+id);
  }
}

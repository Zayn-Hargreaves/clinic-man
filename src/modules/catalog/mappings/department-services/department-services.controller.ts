import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentServicesService } from './department-services.service';
import { CreateDepartmentServiceDto } from './dto/create-department-service.dto';
import { UpdateDepartmentServiceDto } from './dto/update-department-service.dto';

@Controller('department-services')
export class DepartmentServicesController {
  constructor(private readonly departmentServicesService: DepartmentServicesService) {}

  @Post()
  create(@Body() createDepartmentServiceDto: CreateDepartmentServiceDto) {
    return this.departmentServicesService.create(createDepartmentServiceDto);
  }

  @Get()
  findAll() {
    return this.departmentServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentServiceDto: UpdateDepartmentServiceDto) {
    return this.departmentServicesService.update(+id, updateDepartmentServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentServicesService.remove(+id);
  }
}

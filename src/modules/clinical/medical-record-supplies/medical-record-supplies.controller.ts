import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalRecordSuppliesService } from './medical-record-supplies.service';
import { CreateMedicalRecordSupplyDto } from './dto/create-medical-record-supply.dto';
import { UpdateMedicalRecordSupplyDto } from './dto/update-medical-record-supply.dto';

@Controller('medical-record-supplies')
export class MedicalRecordSuppliesController {
  constructor(private readonly medicalRecordSuppliesService: MedicalRecordSuppliesService) {}

  @Post()
  create(@Body() createMedicalRecordSupplyDto: CreateMedicalRecordSupplyDto) {
    return this.medicalRecordSuppliesService.create(createMedicalRecordSupplyDto);
  }

  @Get()
  findAll() {
    return this.medicalRecordSuppliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalRecordSuppliesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalRecordSupplyDto: UpdateMedicalRecordSupplyDto) {
    return this.medicalRecordSuppliesService.update(+id, updateMedicalRecordSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalRecordSuppliesService.remove(+id);
  }
}

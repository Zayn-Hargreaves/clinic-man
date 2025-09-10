import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicalSuppliesService } from './medical-supplies.service';
import { CreateMedicalSupplyDto } from './dto/create-medical-supply.dto';
import { UpdateMedicalSupplyDto } from './dto/update-medical-supply.dto';

@Controller('medical-supplies')
export class MedicalSuppliesController {
  constructor(
    private readonly medicalSuppliesService: MedicalSuppliesService,
  ) {}

  @Post()
  create(@Body() createMedicalSupplyDto: CreateMedicalSupplyDto) {
    return this.medicalSuppliesService.create(createMedicalSupplyDto);
  }

  @Get()
  findAll() {
    return this.medicalSuppliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalSuppliesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicalSupplyDto: UpdateMedicalSupplyDto,
  ) {
    return this.medicalSuppliesService.update(+id, updateMedicalSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalSuppliesService.remove(+id);
  }
}

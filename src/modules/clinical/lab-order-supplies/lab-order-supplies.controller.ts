import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LabOrderSuppliesService } from './lab-order-supplies.service';
import { CreateLabOrderSupplyDto } from './dto/create-lab-order-supply.dto';
import { UpdateLabOrderSupplyDto } from './dto/update-lab-order-supply.dto';

@Controller('lab-order-supplies')
export class LabOrderSuppliesController {
  constructor(private readonly labOrderSuppliesService: LabOrderSuppliesService) {}

  @Post()
  create(@Body() createLabOrderSupplyDto: CreateLabOrderSupplyDto) {
    return this.labOrderSuppliesService.create(createLabOrderSupplyDto);
  }

  @Get()
  findAll() {
    return this.labOrderSuppliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labOrderSuppliesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLabOrderSupplyDto: UpdateLabOrderSupplyDto) {
    return this.labOrderSuppliesService.update(+id, updateLabOrderSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labOrderSuppliesService.remove(+id);
  }
}

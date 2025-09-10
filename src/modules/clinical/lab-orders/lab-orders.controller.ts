import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LabOrdersService } from './lab-orders.service';
import { CreateLabOrderDto } from './dto/create-lab-order.dto';
import { UpdateLabOrderDto } from './dto/update-lab-order.dto';

@Controller('lab-orders')
export class LabOrdersController {
  constructor(private readonly labOrdersService: LabOrdersService) {}

  @Post()
  create(@Body() createLabOrderDto: CreateLabOrderDto) {
    return this.labOrdersService.create(createLabOrderDto);
  }

  @Get()
  findAll() {
    return this.labOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLabOrderDto: UpdateLabOrderDto) {
    return this.labOrdersService.update(+id, updateLabOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labOrdersService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PharmacySalesService } from './pharmacy-sales.service';
import { CreatePharmacySaleDto } from './dto/create-pharmacy-sale.dto';
import { UpdatePharmacySaleDto } from './dto/update-pharmacy-sale.dto';

@Controller('pharmacy-sales')
export class PharmacySalesController {
  constructor(private readonly pharmacySalesService: PharmacySalesService) {}

  @Post()
  create(@Body() createPharmacySaleDto: CreatePharmacySaleDto) {
    return this.pharmacySalesService.create(createPharmacySaleDto);
  }

  @Get()
  findAll() {
    return this.pharmacySalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pharmacySalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePharmacySaleDto: UpdatePharmacySaleDto) {
    return this.pharmacySalesService.update(+id, updatePharmacySaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pharmacySalesService.remove(+id);
  }
}

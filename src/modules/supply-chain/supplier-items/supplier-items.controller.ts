import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupplierItemsService } from './supplier-items.service';
import { CreateSupplierItemDto } from './dto/create-supplier-item.dto';
import { UpdateSupplierItemDto } from './dto/update-supplier-item.dto';

@Controller('supplier-items')
export class SupplierItemsController {
  constructor(private readonly supplierItemsService: SupplierItemsService) {}

  @Post()
  create(@Body() createSupplierItemDto: CreateSupplierItemDto) {
    return this.supplierItemsService.create(createSupplierItemDto);
  }

  @Get()
  findAll() {
    return this.supplierItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplierItemDto: UpdateSupplierItemDto) {
    return this.supplierItemsService.update(+id, updateSupplierItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierItemsService.remove(+id);
  }
}

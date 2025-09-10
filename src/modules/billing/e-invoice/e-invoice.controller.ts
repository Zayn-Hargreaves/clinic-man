import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EInvoiceService } from './e-invoice.service';
import { CreateEInvoiceDto } from './dto/create-e-invoice.dto';
import { UpdateEInvoiceDto } from './dto/update-e-invoice.dto';

@Controller('e-invoice')
export class EInvoiceController {
  constructor(private readonly eInvoiceService: EInvoiceService) {}

  @Post()
  create(@Body() createEInvoiceDto: CreateEInvoiceDto) {
    return this.eInvoiceService.create(createEInvoiceDto);
  }

  @Get()
  findAll() {
    return this.eInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEInvoiceDto: UpdateEInvoiceDto) {
    return this.eInvoiceService.update(+id, updateEInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eInvoiceService.remove(+id);
  }
}

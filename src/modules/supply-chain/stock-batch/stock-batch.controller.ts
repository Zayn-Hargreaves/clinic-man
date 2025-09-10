import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockBatchService } from './stock-batch.service';
import { CreateStockBatchDto } from './dto/create-stock-batch.dto';
import { UpdateStockBatchDto } from './dto/update-stock-batch.dto';

@Controller('stock-batch')
export class StockBatchController {
  constructor(private readonly stockBatchService: StockBatchService) {}

  @Post()
  create(@Body() createStockBatchDto: CreateStockBatchDto) {
    return this.stockBatchService.create(createStockBatchDto);
  }

  @Get()
  findAll() {
    return this.stockBatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockBatchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockBatchDto: UpdateStockBatchDto) {
    return this.stockBatchService.update(+id, updateStockBatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockBatchService.remove(+id);
  }
}

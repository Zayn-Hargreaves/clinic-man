import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryTranactionsService } from './inventory-transactions.service';
import { CreateInventoryTranactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTranactionDto } from './dto/update-inventory-transaction.dto';

@Controller('inventory-tranactions')
export class InventoryTranactionsController {
  constructor(
    private readonly inventoryTranactionsService: InventoryTranactionsService,
  ) {}

  @Post()
  create(@Body() createInventoryTranactionDto: CreateInventoryTranactionDto) {
    return this.inventoryTranactionsService.create(
      createInventoryTranactionDto,
    );
  }

  @Get()
  findAll() {
    return this.inventoryTranactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryTranactionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryTranactionDto: UpdateInventoryTranactionDto,
  ) {
    return this.inventoryTranactionsService.update(
      +id,
      updateInventoryTranactionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryTranactionsService.remove(+id);
  }
}

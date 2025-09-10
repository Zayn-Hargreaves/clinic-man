import { Injectable } from '@nestjs/common';
import { CreateInventoryTranactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTranactionDto } from './dto/update-inventory-transaction.dto';

@Injectable()
export class InventoryTranactionsService {
  create(createInventoryTranactionDto: CreateInventoryTranactionDto) {
    return 'This action adds a new inventoryTranaction';
  }

  findAll() {
    return `This action returns all inventoryTranactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryTranaction`;
  }

  update(
    id: number,
    updateInventoryTranactionDto: UpdateInventoryTranactionDto,
  ) {
    return `This action updates a #${id} inventoryTranaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryTranaction`;
  }
}

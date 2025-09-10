import { Injectable } from '@nestjs/common';
import { CreateSupplierItemDto } from './dto/create-supplier-item.dto';
import { UpdateSupplierItemDto } from './dto/update-supplier-item.dto';

@Injectable()
export class SupplierItemsService {
  create(createSupplierItemDto: CreateSupplierItemDto) {
    return 'This action adds a new supplierItem';
  }

  findAll() {
    return `This action returns all supplierItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplierItem`;
  }

  update(id: number, updateSupplierItemDto: UpdateSupplierItemDto) {
    return `This action updates a #${id} supplierItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplierItem`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateLabOrderDto } from './dto/create-lab-order.dto';
import { UpdateLabOrderDto } from './dto/update-lab-order.dto';

@Injectable()
export class LabOrdersService {
  create(createLabOrderDto: CreateLabOrderDto) {
    return 'This action adds a new labOrder';
  }

  findAll() {
    return `This action returns all labOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labOrder`;
  }

  update(id: number, updateLabOrderDto: UpdateLabOrderDto) {
    return `This action updates a #${id} labOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} labOrder`;
  }
}

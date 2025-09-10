import { Injectable } from '@nestjs/common';
import { CreateLabOrderSupplyDto } from './dto/create-lab-order-supply.dto';
import { UpdateLabOrderSupplyDto } from './dto/update-lab-order-supply.dto';

@Injectable()
export class LabOrderSuppliesService {
  create(createLabOrderSupplyDto: CreateLabOrderSupplyDto) {
    return 'This action adds a new labOrderSupply';
  }

  findAll() {
    return `This action returns all labOrderSupplies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labOrderSupply`;
  }

  update(id: number, updateLabOrderSupplyDto: UpdateLabOrderSupplyDto) {
    return `This action updates a #${id} labOrderSupply`;
  }

  remove(id: number) {
    return `This action removes a #${id} labOrderSupply`;
  }
}

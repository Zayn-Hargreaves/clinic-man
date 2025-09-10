import { Injectable } from '@nestjs/common';
import { CreatePharmacySaleDto } from './dto/create-pharmacy-sale.dto';
import { UpdatePharmacySaleDto } from './dto/update-pharmacy-sale.dto';

@Injectable()
export class PharmacySalesService {
  create(createPharmacySaleDto: CreatePharmacySaleDto) {
    return 'This action adds a new pharmacySale';
  }

  findAll() {
    return `This action returns all pharmacySales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pharmacySale`;
  }

  update(id: number, updatePharmacySaleDto: UpdatePharmacySaleDto) {
    return `This action updates a #${id} pharmacySale`;
  }

  remove(id: number) {
    return `This action removes a #${id} pharmacySale`;
  }
}

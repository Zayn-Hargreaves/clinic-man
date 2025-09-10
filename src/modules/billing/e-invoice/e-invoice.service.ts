import { Injectable } from '@nestjs/common';
import { CreateEInvoiceDto } from './dto/create-e-invoice.dto';
import { UpdateEInvoiceDto } from './dto/update-e-invoice.dto';

@Injectable()
export class EInvoiceService {
  create(createEInvoiceDto: CreateEInvoiceDto) {
    return 'This action adds a new eInvoice';
  }

  findAll() {
    return `This action returns all eInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eInvoice`;
  }

  update(id: number, updateEInvoiceDto: UpdateEInvoiceDto) {
    return `This action updates a #${id} eInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} eInvoice`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateEInvoiceDto } from './create-e-invoice.dto';

export class UpdateEInvoiceDto extends PartialType(CreateEInvoiceDto) {}

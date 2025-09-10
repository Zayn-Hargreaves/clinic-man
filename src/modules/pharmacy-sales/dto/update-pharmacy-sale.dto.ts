import { PartialType } from '@nestjs/mapped-types';
import { CreatePharmacySaleDto } from './create-pharmacy-sale.dto';

export class UpdatePharmacySaleDto extends PartialType(CreatePharmacySaleDto) {}

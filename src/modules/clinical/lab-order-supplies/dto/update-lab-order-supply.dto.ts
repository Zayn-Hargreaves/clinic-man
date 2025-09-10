import { PartialType } from '@nestjs/mapped-types';
import { CreateLabOrderSupplyDto } from './create-lab-order-supply.dto';

export class UpdateLabOrderSupplyDto extends PartialType(CreateLabOrderSupplyDto) {}

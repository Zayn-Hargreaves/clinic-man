import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryTranactionDto } from './create-inventory-transaction.dto';

export class UpdateInventoryTranactionDto extends PartialType(
  CreateInventoryTranactionDto,
) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateStockBatchDto } from './create-stock-batch.dto';

export class UpdateStockBatchDto extends PartialType(CreateStockBatchDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalRecordSupplyDto } from './create-medical-record-supply.dto';

export class UpdateMedicalRecordSupplyDto extends PartialType(CreateMedicalRecordSupplyDto) {}

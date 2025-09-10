import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentServiceDto } from './create-department-service.dto';

export class UpdateDepartmentServiceDto extends PartialType(CreateDepartmentServiceDto) {}

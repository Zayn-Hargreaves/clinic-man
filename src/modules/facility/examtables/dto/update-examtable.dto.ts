import { PartialType } from '@nestjs/mapped-types';
import { CreateExamtableDto } from './create-examtable.dto';

export class UpdateExamtableDto extends PartialType(CreateExamtableDto) {}

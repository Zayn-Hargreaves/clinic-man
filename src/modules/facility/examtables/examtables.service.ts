import { Injectable } from '@nestjs/common';
import { CreateExamtableDto } from './dto/create-examtable.dto';
import { UpdateExamtableDto } from './dto/update-examtable.dto';

@Injectable()
export class ExamtablesService {
  create(createExamtableDto: CreateExamtableDto) {
    return 'This action adds a new examtable';
  }

  findAll() {
    return `This action returns all examtables`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examtable`;
  }

  update(id: number, updateExamtableDto: UpdateExamtableDto) {
    return `This action updates a #${id} examtable`;
  }

  remove(id: number) {
    return `This action removes a #${id} examtable`;
  }
}

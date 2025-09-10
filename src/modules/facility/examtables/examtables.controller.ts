import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamtablesService } from './examtables.service';
import { CreateExamtableDto } from './dto/create-examtable.dto';
import { UpdateExamtableDto } from './dto/update-examtable.dto';

@Controller('examtables')
export class ExamtablesController {
  constructor(private readonly examtablesService: ExamtablesService) {}

  @Post()
  create(@Body() createExamtableDto: CreateExamtableDto) {
    return this.examtablesService.create(createExamtableDto);
  }

  @Get()
  findAll() {
    return this.examtablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examtablesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamtableDto: UpdateExamtableDto) {
    return this.examtablesService.update(+id, updateExamtableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examtablesService.remove(+id);
  }
}

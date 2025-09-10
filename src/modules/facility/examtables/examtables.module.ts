import { Module } from '@nestjs/common';
import { ExamtablesService } from './examtables.service';
import { ExamtablesController } from './examtables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examtable } from './entities/examtable.entity';
import { ExamTablesRepository } from './examtables.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Examtable])],
  controllers: [ExamtablesController],
  providers: [ExamtablesService, ExamTablesRepository],
  exports: [ExamTablesRepository],
})
export class ExamtablesModule {}

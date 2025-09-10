import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Examtable } from './entities/examtable.entity';

@Injectable()
export class ExamTablesRepository extends BaseRepository<Examtable> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Examtable, dataSource, 'id');
  }
}

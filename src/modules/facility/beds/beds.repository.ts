import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Bed } from './entities/bed.entity';

@Injectable()
export class BedsRepository extends BaseRepository<Bed> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Bed, dataSource, 'id');
  }
}

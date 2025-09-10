import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Slot } from './entities/slot.entity';

@Injectable()
export class SlotsRepository extends BaseRepository<Slot> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Slot, dataSource, 'id');
  }
}

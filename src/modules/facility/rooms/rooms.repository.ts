import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsRepository extends BaseRepository<Room> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Room, dataSource, 'id');
  }
}

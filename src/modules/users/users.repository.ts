import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository extends BaseRepository<User> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(User, dataSource, 'id');
  }
}

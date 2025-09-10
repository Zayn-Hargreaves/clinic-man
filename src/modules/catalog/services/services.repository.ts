import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesRepository extends BaseRepository<Service> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Service, dataSource, 'id');
  }
}

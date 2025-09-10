import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { Admission } from './entities/admission.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AdmissionsRepository extends BaseRepository<Admission> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Admission, dataSource, 'id');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { AuditLog } from './entities/audit-log.entity';

@Injectable()
export class AuditLogsRepository extends BaseRepository<AuditLog> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(AuditLog, dataSource, 'id');
  }
}

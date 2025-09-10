import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Attachment } from './entities/attachment.entity';

@Injectable()
export class AttachmentsRepository extends BaseRepository<Attachment> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Attachment, dataSource, 'id');
  }
}

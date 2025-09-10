import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackRepository extends BaseRepository<Feedback> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Feedback, dataSource, 'id');
  }
}

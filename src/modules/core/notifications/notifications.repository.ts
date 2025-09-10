import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/repositories/baseRepository';
import { DataSource } from 'typeorm';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationsRepository extends BaseRepository<Notification> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(Notification, dataSource, 'id');
  }
}

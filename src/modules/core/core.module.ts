import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [AuditLogsModule, NotificationsModule],
  // controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}

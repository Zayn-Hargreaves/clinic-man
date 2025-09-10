import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
// import { SharedController } from './shared.controller';
import { AttachmentsModule } from './attachments/attachments.module';

@Module({
  // controllers: [SharedController],
  providers: [SharedService],
  imports: [AttachmentsModule],
})
export class SharedModule {}

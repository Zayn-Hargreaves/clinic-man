import { InvoicesModule } from './invoices/invoices.module';
import { InvoiceItemsModule } from './invoice-items/invoice-items.module';
import { PaymentsModule } from './payments/payments.module';
import { EInvoiceModule } from './e-invoice/e-invoice.module';
import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';

@Module({
  imports: [EInvoiceModule, InvoicesModule, InvoiceItemsModule, PaymentsModule],
  providers: [BillingService],
  // controllers: [UsersController],
})
export class BillingModule {}

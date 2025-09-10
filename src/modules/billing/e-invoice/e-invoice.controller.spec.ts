import { Test, TestingModule } from '@nestjs/testing';
import { EInvoiceController } from './e-invoice.controller';
import { EInvoiceService } from './e-invoice.service';

describe('EInvoiceController', () => {
  let controller: EInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EInvoiceController],
      providers: [EInvoiceService],
    }).compile();

    controller = module.get<EInvoiceController>(EInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

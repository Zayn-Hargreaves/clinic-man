import { Test, TestingModule } from '@nestjs/testing';
import { EInvoiceService } from './e-invoice.service';

describe('EInvoiceService', () => {
  let service: EInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EInvoiceService],
    }).compile();

    service = module.get<EInvoiceService>(EInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

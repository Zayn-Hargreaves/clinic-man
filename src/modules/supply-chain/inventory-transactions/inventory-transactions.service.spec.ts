import { Test, TestingModule } from '@nestjs/testing';
import { InventoryTranactionsService } from './inventory-transactions.service';

describe('InventoryTranactionsService', () => {
  let service: InventoryTranactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryTranactionsService],
    }).compile();

    service = module.get<InventoryTranactionsService>(
      InventoryTranactionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

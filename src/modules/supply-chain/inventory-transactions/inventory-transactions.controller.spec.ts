import { Test, TestingModule } from '@nestjs/testing';
import { InventoryTranactionsController } from './inventory-transactions.controller';
import { InventoryTranactionsService } from './inventory-transactions.service';

describe('InventoryTranactionsController', () => {
  let controller: InventoryTranactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryTranactionsController],
      providers: [InventoryTranactionsService],
    }).compile();

    controller = module.get<InventoryTranactionsController>(
      InventoryTranactionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

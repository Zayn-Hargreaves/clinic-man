import { Test, TestingModule } from '@nestjs/testing';
import { StockBatchController } from './stock-batch.controller';
import { StockBatchService } from './stock-batch.service';

describe('StockBatchController', () => {
  let controller: StockBatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockBatchController],
      providers: [StockBatchService],
    }).compile();

    controller = module.get<StockBatchController>(StockBatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

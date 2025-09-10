import { Test, TestingModule } from '@nestjs/testing';
import { StockBatchService } from './stock-batch.service';

describe('StockBatchService', () => {
  let service: StockBatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockBatchService],
    }).compile();

    service = module.get<StockBatchService>(StockBatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

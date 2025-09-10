import { Test, TestingModule } from '@nestjs/testing';
import { SupplierItemsService } from './supplier-items.service';

describe('SupplierItemsService', () => {
  let service: SupplierItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierItemsService],
    }).compile();

    service = module.get<SupplierItemsService>(SupplierItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SupplierItemsController } from './supplier-items.controller';
import { SupplierItemsService } from './supplier-items.service';

describe('SupplierItemsController', () => {
  let controller: SupplierItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplierItemsController],
      providers: [SupplierItemsService],
    }).compile();

    controller = module.get<SupplierItemsController>(SupplierItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

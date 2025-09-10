import { Injectable } from '@nestjs/common';
import { CreateStockBatchDto } from './dto/create-stock-batch.dto';
import { UpdateStockBatchDto } from './dto/update-stock-batch.dto';

@Injectable()
export class StockBatchService {
  create(createStockBatchDto: CreateStockBatchDto) {
    return 'This action adds a new stockBatch';
  }

  findAll() {
    return `This action returns all stockBatch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockBatch`;
  }

  update(id: number, updateStockBatchDto: UpdateStockBatchDto) {
    return `This action updates a #${id} stockBatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockBatch`;
  }
}

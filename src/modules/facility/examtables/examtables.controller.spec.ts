import { Test, TestingModule } from '@nestjs/testing';
import { ExamtablesController } from './examtables.controller';
import { ExamtablesService } from './examtables.service';

describe('ExamtablesController', () => {
  let controller: ExamtablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamtablesController],
      providers: [ExamtablesService],
    }).compile();

    controller = module.get<ExamtablesController>(ExamtablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

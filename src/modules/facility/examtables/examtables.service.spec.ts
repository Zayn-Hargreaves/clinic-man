import { Test, TestingModule } from '@nestjs/testing';
import { ExamtablesService } from './examtables.service';

describe('ExamtablesService', () => {
  let service: ExamtablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamtablesService],
    }).compile();

    service = module.get<ExamtablesService>(ExamtablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AtmsService } from './atms.service';

describe('AtmsService', () => {
  let service: AtmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtmsService],
    }).compile();

    service = module.get<AtmsService>(AtmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

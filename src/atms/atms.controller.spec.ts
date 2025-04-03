import { Test, TestingModule } from '@nestjs/testing';
import { AtmsController } from './atms.controller';
import { AtmsService } from './atms.service';

describe('AtmsController', () => {
  let controller: AtmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtmsController],
      providers: [AtmsService],
    }).compile();

    controller = module.get<AtmsController>(AtmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

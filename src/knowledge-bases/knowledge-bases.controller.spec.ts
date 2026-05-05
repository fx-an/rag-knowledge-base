import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeBasesController } from './knowledge-bases.controller';

describe('KnowledgeBasesController', () => {
  let controller: KnowledgeBasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeBasesController],
    }).compile();

    controller = module.get<KnowledgeBasesController>(KnowledgeBasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

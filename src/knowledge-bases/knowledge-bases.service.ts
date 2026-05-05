import { Injectable, NotFoundException } from '@nestjs/common';
import type { KnowledgeBase, OperationResult } from './types/bases.interface';
import { StatusCode } from './types/bases.interface';
import type {
  CreateKnowledgeBaseDto,
  UpdateKnowledgeBaseDto,
} from './dto/bases.dto';

const DATA: KnowledgeBase[] = [
  {
    id: 1,
    name: '后端学习知识库',
    description: '用于沉淀 Node.js、NestJS、数据库和 RAG 学习资料',
    visibility: 'private',
    status: 'active',
    createdAt: '2026-05-05T00:00:00.000Z',
    updatedAt: '2026-05-05T00:00:00.000Z',
  },
  {
    id: 2,
    name: '团队知识库',
    description: '团队共享的业务文档和接口规范',
    visibility: 'team',
    status: 'active',
    createdAt: '2026-05-05T00:00:00.000Z',
    updatedAt: '2026-05-05T00:00:00.000Z',
  },
  {
    id: 3,
    name: '归档知识库',
    description: '已归档的历史资料',
    visibility: 'private',
    status: 'archived',
    createdAt: '2026-05-05T00:00:00.000Z',
    updatedAt: '2026-05-05T00:00:00.000Z',
  },
];

@Injectable()
export class KnowledgeBasesService {
  findAll(): KnowledgeBase[] {
    return DATA;
  }

  findOne(id: number): KnowledgeBase {
    const result: KnowledgeBase | undefined = DATA.find(
      (item: KnowledgeBase) => item.id === id,
    );
    if (!result) throw new NotFoundException();
    return result;
  }

  create(item: CreateKnowledgeBaseDto): OperationResult<KnowledgeBase> {
    const now = new Date().toISOString();
    const id = Math.max(...DATA.map((data: KnowledgeBase) => data.id), 0) + 1;
    const knowledgeBase: KnowledgeBase = {
      id,
      ...item,
      createdAt: now,
      updatedAt: now,
    };

    DATA.push(knowledgeBase);
    return {
      code: StatusCode.OK,
      message: '成功',
      data: knowledgeBase,
    };
  }

  update(
    id: number,
    item: UpdateKnowledgeBaseDto,
  ): OperationResult<KnowledgeBase> {
    const dataIndex: number = DATA.findIndex(
      (_item: KnowledgeBase) => _item.id === id,
    );

    if (dataIndex === -1) {
      throw new NotFoundException();
    }

    const knowledgeBase: KnowledgeBase = {
      ...DATA[dataIndex],
      ...item,
      id,
      updatedAt: new Date().toISOString(),
    };

    DATA.splice(dataIndex, 1, knowledgeBase);
    return {
      code: StatusCode.OK,
      message: '成功',
      data: knowledgeBase,
    };
  }

  remove(id: number): OperationResult {
    const dataIndex: number = DATA.findIndex(
      (_item: KnowledgeBase) => _item.id === id,
    );

    if (dataIndex === -1) {
      throw new NotFoundException();
    }

    DATA.splice(dataIndex, 1);
    return {
      code: StatusCode.OK,
      message: '成功',
    };
  }
}

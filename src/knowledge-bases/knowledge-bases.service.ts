import { Injectable, NotFoundException } from '@nestjs/common';
import {
  KnowledgeBase,
  OperationResult,
  StatusCode,
} from './types/bases.interface';

const DATA: KnowledgeBase[] = [
  {
    id: 1,
    name: 'wangta',
    description: 'wangta description',
  },
  {
    id: 2,
    name: 'wangta 2',
    description: 'wangta 2 description',
  },
  {
    id: 3,
    name: 'wangta 3',
    description: 'wangta 3 description',
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

  create(item: KnowledgeBase): OperationResult {
    const hasData: boolean = !!DATA.find(
      (_item: KnowledgeBase) => _item.id === item.id,
    );
    if (hasData) {
      return {
        code: StatusCode.Failed,
        message: '已存在相同数据',
      };
    }

    DATA.push(item);
    return {
      code: StatusCode.OK,
      message: '成功',
    };
  }

  update(id: number, item: KnowledgeBase): OperationResult {
    const dataIndex: number = DATA.findIndex(
      (_item: KnowledgeBase) => _item.id === id,
    );

    if (dataIndex === -1) {
      return {
        code: StatusCode.Failed,
        message: '没有找到要变更的内容',
      };
    }

    DATA.splice(dataIndex, 1, item);
    return {
      code: StatusCode.OK,
      message: '成功',
    };
  }

  remove(id: number): OperationResult {
    const dataIndex: number = DATA.findIndex(
      (_item: KnowledgeBase) => _item.id === id,
    );

    if (dataIndex === -1) {
      return {
        code: StatusCode.Failed,
        message: '没有找到要变更的内容',
      };
    }

    DATA.splice(dataIndex, 1);
    return {
      code: StatusCode.OK,
      message: '成功',
    };
  }
}

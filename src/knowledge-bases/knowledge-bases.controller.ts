import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import type { KnowledgeBase, OperationResult } from './types/bases.interface';
import { KnowledgeBasesService } from './knowledge-bases.service';

@Controller('knowledge-bases')
export class KnowledgeBasesController {
  constructor(private readonly basesService: KnowledgeBasesService) {}

  /**
   * 查询列表
   * */
  @Get()
  getList(): KnowledgeBase[] {
    return this.basesService.getList();
  }

  /**
   * 查询详情
   * */
  @Get(':id')
  getView(@Param('id', ParseIntPipe) id: number): KnowledgeBase | null {
    return this.basesService.getView(id);
  }

  /**
   * 创建知识库
   * */
  @Post()
  create(@Body() item: KnowledgeBase): OperationResult {
    return this.basesService.create(item);
  }

  /**
   * 修改知识库
   * */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() item: KnowledgeBase,
  ): OperationResult {
    return this.basesService.update(id, item);
  }

  /**
   * 删除知识库
   * */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): OperationResult {
    return this.basesService.delete(id);
  }
}

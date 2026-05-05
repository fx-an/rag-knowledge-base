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
import type { OperationResult, KnowledgeBase } from './types/bases.interface';
import type {
  CreateKnowledgeBaseDto,
  UpdateKnowledgeBaseDto,
} from './dto/bases.dto';
import { KnowledgeBasesService } from './knowledge-bases.service';

@Controller('knowledge-bases')
export class KnowledgeBasesController {
  constructor(private readonly basesService: KnowledgeBasesService) {}

  /**
   * 查询列表
   * */
  @Get()
  findAll(): KnowledgeBase[] {
    return this.basesService.findAll();
  }

  /**
   * 查询详情
   * */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): KnowledgeBase {
    return this.basesService.findOne(id);
  }

  /**
   * 创建知识库
   * */
  @Post()
  create(@Body() item: CreateKnowledgeBaseDto): OperationResult<KnowledgeBase> {
    return this.basesService.create(item);
  }

  /**
   * 修改知识库
   * */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() item: UpdateKnowledgeBaseDto,
  ): OperationResult<KnowledgeBase> {
    return this.basesService.update(id, item);
  }

  /**
   * 删除知识库
   * */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): OperationResult {
    return this.basesService.remove(id);
  }
}

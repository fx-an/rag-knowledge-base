// 单个知识库
export type KnowledgeBaseVisibility = 'private' | 'team';
export type KnowledgeBaseStatus = 'active' | 'archived';

export interface KnowledgeBase {
  id: number;
  name: string;
  description?: string;
  visibility: KnowledgeBaseVisibility;
  status: KnowledgeBaseStatus;
  createdAt: string;
  updatedAt: string;
}

// 状态码
export enum StatusCode {
  OK = 200,
  Failed = 9999,
}

// 操作结果
export interface OperationResult<T = unknown> {
  code: StatusCode;
  message: string;
  data?: T;
}

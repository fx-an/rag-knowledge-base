// 单个知识库
export interface KnowledgeBase {
  id: number;
  name: string;
  description?: string;
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

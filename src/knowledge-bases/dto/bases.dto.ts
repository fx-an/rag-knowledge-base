import type {
  KnowledgeBaseStatus,
  KnowledgeBaseVisibility,
} from '../types/bases.interface';

export class CreateKnowledgeBaseDto {
  name: string;
  description?: string;
  visibility: KnowledgeBaseVisibility;
  status: KnowledgeBaseStatus;
}

export class UpdateKnowledgeBaseDto {
  name?: string;
  description?: string;
  visibility?: KnowledgeBaseVisibility;
  status?: KnowledgeBaseStatus;
}

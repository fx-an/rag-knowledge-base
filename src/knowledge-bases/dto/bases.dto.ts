import { IsString } from 'class-validator';

export class BasesDto {
  @IsString()
  id: string;
}

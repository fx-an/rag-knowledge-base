import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnowledgeBasesModule } from './knowledge-bases/knowledge-bases.module';

@Module({
  imports: [KnowledgeBasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

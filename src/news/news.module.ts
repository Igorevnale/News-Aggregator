import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsRepository } from 'src/repositories/news-repository';
import{AuthModule} from '../auth/auth.module';
import { User } from 'src/entities/user-entity';
import { News } from 'src/entities/news-entity';

@Module ({
  imports:[
    TypeOrmModule.forFeature([NewsRepository]), AuthModule],
  controllers: [NewsController],
  providers: [NewsService]
}) 
export class NewsModule {}

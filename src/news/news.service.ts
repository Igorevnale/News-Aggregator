import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsRepository } from 'src/repositories/news-repository'; 
import { GetNewsFilterDto } from 'src/dto/get-news-filter-dto';
import { News } from 'src/entities/news-entity'; 
import { User } from 'src/entities/user-entity'; 
import { Repository } from 'typeorm';
import { CreateNewsDto } from 'src/dto/create-news-dto';
import { UpdateNewsDto } from 'src/dto/update-news-dto';
import {NotFoundException} from '@nestjs/common'
import { AddNewsDto } from 'src/dto/add-news-dto';
@Injectable()
export class NewsService {
      constructor(
        @InjectRepository(NewsRepository)
        private newsRepository:NewsRepository //Repository<News>,
        ) {}

    async getNews(filterDto:GetNewsFilterDto, user:User):Promise<News[]> {
      const found=await this.newsRepository.findOne({ where:{isPublic:true}});
      if (!found){
        throw new NotFoundException ('We can not find such news')
      }
         return await this.newsRepository.getNews(filterDto,user);
}  
    async createNews (createNewsDto:CreateNewsDto,user:User,isPublic:boolean): Promise<News> {
      return await this.newsRepository.createNews (createNewsDto,user)
   } 
     async deleteNews (id:string):Promise <void>{
        return await this.newsRepository.deleteNews (id)
     }
       async updateNews(updateNewsDto:UpdateNewsDto):Promise <News> {
        return await this.newsRepository.updateNews (updateNewsDto)
        }
        async addNews (addNewsDto:AddNewsDto):Promise <News>{
          return await this.newsRepository.addNews(addNewsDto)
        }
    }
   
  
import{Repository,EntityRepository} from 'typeorm';
import { News } from 'src/entities/news-entity'; 
import { GetNewsFilterDto } from 'src/dto/get-news-filter-dto';
import { User } from 'src/entities/user-entity'; 
import { Get, InternalServerErrorException,Injectable,Patch } from '@nestjs/common';
import { CreateNewsDto } from 'src/dto/create-news-dto';
import { UpdateNewsDto } from 'src/dto/update-news-dto';
import { AddNewsDto } from 'src/dto/add-news-dto';
@EntityRepository(News)
@Injectable ()
  export class NewsRepository extends Repository<News>{ 
    async getNews (filterDto:GetNewsFilterDto,user:User):Promise<News[]>{
        const query= this.createQueryBuilder('news')  ;
        query.where({ user});
     if (Get) {
          query.andWhere (
            '(LOWER(task.title) LIKE LOWER (:search) OR LOWER( task.description) LIKE LOWER (:search))',
            {search: '%${search}%'},
          )
        }
        try {
          const news=await query.getMany();
          return news;
      } catch (error) {
        throw new InternalServerErrorException ();
      }
    }
   async createNews(createNewsDto:CreateNewsDto,user:User):Promise <News> {
    const {title,publishedDate,url,image}=createNewsDto;
    const news=this.create ({
      title,
      publishedDate,
      url,
      image
    }) 
    await this.save(news);
       return news;

    }
    async deleteNews (id:string
      ):Promise <void> {
         return this. deleteNews(id)
    }
      async updateNews (updateNewsDto:UpdateNewsDto):Promise <News>{
        return this.updateNews(updateNewsDto)
      }
        async addNews (addNewsDto:AddNewsDto):Promise <News>{
          return this.addNews(addNewsDto)
        }
      }

      
  
   
  
import { Controller, Delete,Param,Post,Patch} from '@nestjs/common';
import { NewsService } from './news.service';
import { Get,Query,Body } from '@nestjs/common';
import { GetNewsFilterDto } from 'src/dto/get-news-filter-dto';
import { News } from 'src/entities/news-entity'; 
import { User } from 'src/entities/user-entity'; 
import { GetUser } from './get-user-decorator';
import { CreateNewsDto } from 'src/dto/create-news-dto';
import { UpdateNewsDto } from 'src/dto/update-news-dto';
import { Roles } from './roles-decorator';
import { Role } from 'src/auth/role.enum';
import { FindRelationsNotFoundError } from 'typeorm';
import { AddNewsDto } from 'src/dto/add-news-dto';
@Controller('news')
export class NewsController {
    constructor (private newsService:NewsService) {}
    @Get()
  getNews (@Query() filterDto:GetNewsFilterDto,
@GetUser() user:User,
  ):Promise<News []> { 
return this.newsService.getNews (filterDto,user);
  }
  @Post()
  createNews (@Body() createNewsDto:CreateNewsDto,
     @GetUser() user:User,isPublic:boolean ):Promise<News> {
      return this.newsService.createNews (createNewsDto,user,isPublic)
   }
    @Delete()
    @Roles(Role.Admin)
    deleteNews (@Query()id:string ):Promise <void>{
       return this.newsService.deleteNews(id)
    }
      @Patch()
      @Roles(Role.Admin)
    updateNews (@Query() updateNewsDto:UpdateNewsDto):Promise<News>  {
      return this.newsService.updateNews(updateNewsDto)
    }     
     @Post()
       addNews (@Query() addNewsDto:AddNewsDto):Promise<News> {
        return this.newsService.addNews(addNewsDto)

       }
}

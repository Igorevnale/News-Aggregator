import { EntityRepository, Repository } from "typeorm";
import { User } from "src/entities/user-entity"; 
import { AuthCredentialsDto } from "src/dto/auth-credentials-dto";  
import { ConfigurableModuleClass } from "@nestjs/common/cache/cache.module-definition";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import*as bcrypt from 'bcrypt'
import { CreateNewsDto } from "src/dto/create-news-dto";
import { News } from "src/entities/news-entity";
import { GetNewsFilterDto } from "src/dto/get-news-filter-dto";

@EntityRepository (User)
    export class UsersRepository extends Repository<User> {
  async createUser (authCredentialsDto:AuthCredentialsDto):Promise<void> {
  const{username,password}=authCredentialsDto;

   const salt=bcrypt.genSalt();
    const hashedParrord= await bcrypt.hash(password, await salt);
  
const user=this.create({username,password});
try {
    await this.save(user);
    }catch (error) {
if (error.code==='23505') {
      throw new ConflictException ('Username already exists');
} else{
    throw new InternalServerErrorException ()
}
}
}
  async getNews (getNews:GetNewsFilterDto,isPublic:true):Promise <News> {
    return this.getNews(getNews,isPublic)
  }
  async createNews ( createNewsDto:CreateNewsDto,isPublic:false): Promise<News> {
    const {title,publishedDate,url,image}=createNewsDto;
  return this.createNews(createNewsDto,isPublic)
  }
}
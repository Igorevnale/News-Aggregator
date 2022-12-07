import { IsNotEmpty, IsOptional } from "class-validator";
import { User } from "src/entities/user-entity";

export class CreateNewsDto{
    isPublic:boolean
    @IsNotEmpty ()
    title:string
    @IsNotEmpty()
    publishedDate:string
    @IsOptional ()
    url:string
    @IsOptional ()
    image:string
    user:User
 }
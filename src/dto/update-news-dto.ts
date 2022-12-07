import { IsOptional } from "class-validator";
import { time } from "console";
import { TimeInterval } from "rxjs/internal/operators/timeInterval";
import { User } from "src/entities/user-entity";
import { BeforeUpdate } from "typeorm";

export class UpdateNewsDto {
    isPublic:boolean
    isAdmin:boolean
    user:User
    @IsOptional()
    title:string
    @IsOptional()
    image:string
    @IsOptional ()
    publishedDate:string
    @IsOptional()
    url:string
    @IsOptional()
    id:string
    
}
import { IsOptional} from 'class-validator'
export class GetNewsFilterDto{
  isPublic:boolean
    @IsOptional()
  title:string;
    @IsOptional()
    url:string
    @IsOptional()
    publishedDate:string
}
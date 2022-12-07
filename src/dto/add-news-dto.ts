import {SetMetadata} from  '@nestjs/common'
import { Interval } from '@nestjs/schedule'
import { Entity } from 'typeorm' 
@Entity()
export class AddNewsDto{
    areNotTheSame:boolean
   api:'https://rapidapi.com/MatcherLabs/api/news-api14'
    @Interval(2160000)
      postNewsInterval (){
        return this.postNewsInterval
      }
      
}
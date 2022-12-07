import { Exclude } from "class-transformer";
import { Column,Entity,ManyToOne} from "typeorm";
import { User } from "./user-entity";
@Entity()
export class News{
  isPublic:boolean
  user:User
    @Column()
     title:string;
      @Column()
      publishedDate:string;
      @Column()
      url:string;
      @Column()
      image:string;
      @Column()
      id:string;
      @ManyToOne (_type=>User,user=>user.news,{eager:false})
      @Exclude()
      toPlainOnly:true

    }

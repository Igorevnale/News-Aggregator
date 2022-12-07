import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { News } from "./news-entity"; 


@Entity()
export class User {
  isAdmin:boolean
   @PrimaryGeneratedColumn('uuid')
 id:string;

 @Column({ unique:true})
username:string;

@Column()
  password:string;
  @OneToMany (_type => News, news=> news.user, {eager:true})
   news: News [] ;
 }

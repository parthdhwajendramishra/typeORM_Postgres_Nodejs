import { Entity, PrimaryGeneratedColumn, Column,BaseEntity,ManyToMany, JoinTable, ManyToOne } from "typeorm"
import { Location } from "./Location";
import {Genre} from"./Genre";

@Entity()
export class Book extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Name: string

    @Column()
    Description: string

    @Column()
    Author: string

    @ManyToOne(()=>Genre,(genre)=>genre.books,{ onDelete: "CASCADE" })
    Book_Genre: Genre;


    @ManyToMany(() => Location,(location)=>location.books,{cascade:true})
    @JoinTable()
    AvailableLocations: Location[];

}
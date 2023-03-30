import { Entity, Column, BaseEntity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Location extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    Location_Name: string

    @ManyToMany(() => Book, (book) => book.AvailableLocations,{
        onDelete: 'CASCADE',
    })
    books: Book[];

}
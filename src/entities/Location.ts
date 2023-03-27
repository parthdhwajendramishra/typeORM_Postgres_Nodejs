import { Entity, Column, BaseEntity, ManyToMany, PrimaryColumn } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Location extends BaseEntity {
    @PrimaryColumn()
    Location_Name: string

    @ManyToMany(() => Book, (book) => book.AvailableLocations,{
        onDelete: 'CASCADE',
    })
    books: Book[];

}

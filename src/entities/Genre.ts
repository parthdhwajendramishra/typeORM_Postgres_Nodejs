import { Entity, Column, BaseEntity, PrimaryColumn, OneToMany } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Genre extends BaseEntity {
    @PrimaryColumn()
    __Genre: string;

    @OneToMany(() => Book, (book) => book.Book_Genre,{ cascade: true })
    books: Book[];

}

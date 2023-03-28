import { Entity, Column, BaseEntity, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Genre extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ unique: true })
    __Genre: string;

    @OneToMany(() => Book, (book) => book.Book_Genre,{ cascade: true })
    books: Book[];

}

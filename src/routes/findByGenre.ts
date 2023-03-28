import express from 'express';
import { Book } from '../entities/Book';
import { Location } from '../entities/Location';
import {Genre} from"../entities/Genre";

const router = express.Router();


router.get('/api/findByGenre', async (req, res) => {

    const {
        _Genre
    } = req.body;

    const book=await Book.createQueryBuilder("book")
                         .leftJoinAndSelect("book.Book_Genre","Book_Genre")
                         .where("Book_Genre.__Genre=:_genre",{_genre:_Genre})
                         .getMany();

    return res.json(book);

});


export { router as findByGenreRouter };
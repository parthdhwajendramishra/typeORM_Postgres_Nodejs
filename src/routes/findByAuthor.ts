import express from 'express';
import { Book } from '../entities/Book';

const router = express.Router();


router.get('/api/findByAuthor', async (req, res) => {

    const {
        _Author
    } = req.body;

    

    const book=await Book.find({
        where: {
            Author: _Author
        }
    })


    return res.json(book);

});


export { router as findByAuthorRouter };
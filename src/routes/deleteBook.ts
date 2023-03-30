import express from 'express';
import { Book } from '../entities/Book';

const router = express.Router();

router.delete('/api/deleteBook', async (req, res) => {

    const {
        _id
    } = req.body;



    const book=await Book.delete({id:_id})
    return res.json(book);

});


export { router as deleteBookRouter };
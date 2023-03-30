import express from 'express';
import { Genre } from '../entities/Genre';

const router = express.Router();

router.delete('/api/deleteGenre', async (req, res) => {

    const {
        _Genre
    } = req.body;



    const genre=await Genre.delete({__Genre:_Genre})
    return res.json(genre);

});


export { router as deleteGenreRouter };
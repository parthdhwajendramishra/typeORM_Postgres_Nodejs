import express from 'express';
import { Book } from '../entities/Book';
import { Location } from '../entities/Location';
import {Genre} from"../entities/Genre";
import { createQueryBuilder } from 'typeorm';
const router = express.Router();

router.get('/api/findByLocation', async (req, res) => {

    const {
        Location
    } = req.body;


    const book=await Book.find({
        where: {
            AvailableLocations: Location
        }
    });

    

    return res.json(book);

});


export { router as findByLocationRouter };
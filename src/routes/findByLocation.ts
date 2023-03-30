import express from 'express';
import { Book } from '../entities/Book';
const router = express.Router();

router.get('/api/findByLocation', async (req, res) => {

    const {
        Location
    } = req.body;


    const { _Locations } = req.body;

    const books = await Book.createQueryBuilder('book')
        .leftJoinAndSelect('book.AvailableLocations', 'location')
        .where('location.Location_Name = :_Location', { _Location:_Locations })
        .getMany()


    

    return res.json(books);

});


export { router as findByLocationRouter };
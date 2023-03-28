import express from 'express';
import { Book } from '../entities/Book';
const router = express.Router();

router.get('/api/findByLocation', async (req, res) => {

    const {
        Location
    } = req.body;


    const book=await Book.createQueryBuilder("book")
    .innerJoin("book.Availablelocations","Availablelocation")
    .where("Availablelocation.Location_Name=:_location",{_location:Location})
    .getMany();

    

    return res.json(book);

});


export { router as findByLocationRouter };
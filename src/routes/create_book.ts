import express from 'express';
import { Book } from '../entities/Book';
import { Location } from '../entities/Location';
import { Genre } from "../entities/Genre";
const router = express.Router();

router.post('/api/book', async (req, res) => {

    const {
        _Name,
        _Description,
        _Author,
        _Genre,
        _Locations
    } = req.body;

    const all_Locations = [];

    for (let i = 0; i < _Locations.length; i++) {

        const location = await Location.findOne({ where: { Location_Name: _Locations[i] } })

        if (!location) {
            const l = Location.create({ Location_Name: _Locations[i] })
            all_Locations.push(l);
        }
        else
            all_Locations.push(location);


    }


    let genre = await Genre.findOne({ where: { __Genre: _Genre } });

    if (!genre) {
        genre = Genre.create({ __Genre: _Genre });
        await genre.save();
    }

    const book = Book.create({
        Name: _Name,
        Description: _Description,
        Author: _Author,
        Book_Genre: genre,
        AvailableLocations: all_Locations
    });

    await book.save();
    return res.json(book);

});


export { router as createBookRouter };
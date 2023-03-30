import express from "express";
import { Book } from "../entities/Book";
import { Location } from "../entities/Location";
import { Genre } from "../entities/Genre";
const router = express.Router();


router.put("/api/updateBook/:id", async (req, res) => {
    const _id = req.params.id;
    const { _Name, _Description, _Author, _Genre, _Locations } = req.body;
  
    const book = await Book.findOne( { where: {id:parseInt(_id)}});
  
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
  
    if (_Name) {
      book.Name = _Name;
    }
  
    if (_Description) {
      book.Description = _Description;
    }
  
    if (_Author) {
      book.Author = _Author;
    }
  
    if (_Genre) {
      let genre = await Genre.findOne({ where: { __Genre: _Genre } });
  
      if (!genre) {
        genre = Genre.create({ __Genre:_Genre });
        await genre.save();
      }
  
      book.Book_Genre = genre;
    }
  
    if (_Locations) {
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
  
      book.AvailableLocations = all_Locations;
    }
  
    await book.save();
  
    return res.json(book);
  });
  export { router as updateBookRouter };
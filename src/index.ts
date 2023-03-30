import { DataSource } from "typeorm"
import express from 'express';
import { Book } from "./entities/Book";
import { Location } from "./entities/Location";
import { Genre } from "./entities/Genre";
import bodyParser from 'body-parser';
import { createBookRouter } from "./routes/create_book";
import { findByAuthorRouter } from "./routes/findByAuthor";
import { findByLocationRouter } from "./routes/findByLocation";
import { findByGenreRouter } from "./routes/findByGenre";
import { deleteLocationRouter } from "./routes/deleteLocation";
import { deleteGenreRouter } from "./routes/deleteGenre";
import { deleteBookRouter } from "./routes/deleteBook";
import { updateBookRouter } from "./routes/updateBook";

const app = express();
app.use(bodyParser.json());

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "parth",
    password: "1234",
    database: "typeorm",
    entities:[Book,Location,Genre],
    synchronize: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        
        app.use(createBookRouter);
        app.use(findByAuthorRouter);
        app.use(findByGenreRouter);
        app.use(findByLocationRouter);
        app.use(deleteLocationRouter);
        app.use(deleteGenreRouter);
        app.use(deleteBookRouter);
        app.use(updateBookRouter);


        app.listen(8080, () => {
			console.log('Now running on port 8080');
		});
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


   
import { DataSource } from "typeorm"
import express from 'express';
import { Book } from "./entities/Book";
import { Location } from "./entities/Location";
import { Genre } from "./entities/Genre";
const bodyParser = require('body-parser');
import { createBookRouter } from "./routes/create_book";
import { findByAuthorRouter } from "./routes/findByAuthor";
import { findByLocationRouter } from "./routes/findByLocation";
const app = express();
app.use(bodyParser.json());

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "parth",
    password: "1234",
    database: "typeorm1",
    entities:[Book,Location,Genre],
    synchronize: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        
        app.use(createBookRouter);
        app.use(findByAuthorRouter);
        app.use(findByLocationRouter);


        app.listen(8080, () => {
			console.log('Now running on port 8080');
		});
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


   
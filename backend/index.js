import express from 'express';
import { addDataBook, getBooksData, getDataBookByQuery } from './config/routes.js';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.json('Hello from backend');
});
app.get('/books', getBooksData);
app.get('/books/:id', getDataBookByQuery);
app.post('/books', addDataBook);

app.listen(8800, () => {
    console.log('App listenig...')
});
import express from 'express';
import { addDataBook, deleteDataBook, getBooksData, getDataBookByQuery, updateDataBook } from './config/routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json('Hello from backend');
});
app.get('/books', getBooksData);
app.get('/books/:id', getDataBookByQuery);
app.post('/books', addDataBook);
app.delete('/books/:id', deleteDataBook);
app.put('/books/:id', updateDataBook);

app.listen(8800, () => {
    console.log('App listenig...')
});
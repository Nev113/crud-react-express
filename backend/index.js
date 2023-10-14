import express from 'express';
import { addDataBook, getBooksData, getDataBookByQuery } from './config/routes.js';

const app = express();

app.get('/', (req, res) => {
    res.json('Hello from backend');
});

app.get('/books', (req, res) => {
    const { id } = req.params;
    if ( id ) {
      return getDataBookByQuery(req, res);
    }
    return getBooksData(req, res);
});
app.post('/books', addDataBook);

app.listen(8800, () => {
    console.log('App listenig...')
});
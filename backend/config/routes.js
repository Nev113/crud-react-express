import db from './database.js';

export const getBooksData = (req, res) => {
    const q = 'SELECT * FROM books';
    db.query(q, (err, data) => {
        if (err) return res.json({msg: 'Data gagal diambil'}).status(500);
        return res.json(data);
    });
};

export const addDataBook = (req, res) => {
    const {title, desc, cover} = req.body;
    const q = 'INSERT INTO books (`title`, `description`, `cover`) VALUE (?)';
    db.query(q, [[title, desc, cover]], (err) => {
        if (err) return res.json({msg: 'Data gagal ditambahkan', err: err}).status(500);
        return res.json({msg: 'Data berhasil ditambahkan.'});
    });
};

export const getDataBookByQuery = (req, res) => {
    const { id } = req.params;
    const q = `SELECT * FROM books WHERE id = ${id}`;
    console.log(id)
    db.query(q, (err, data) => {
        if (err) return res.json({msg: 'Id gagal ditemukan'}).status(404);
        return res.json(data);
    });
};
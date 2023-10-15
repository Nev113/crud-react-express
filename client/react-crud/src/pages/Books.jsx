/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const handleDelete = async (id) => {
    try {
        await axios.delete('http://localhost:8800/books/'+id);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}
const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=> {
        const fetchAllBooks = async () => {
            try{
                const res = await axios.get('http://localhost:8800/books');
                setBooks(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllBooks();
    }, [])
    return (
        <div>
            <h1>Nv113 Books</h1>
            <p>This is Books Library From React.</p>
            <div className="books">
                {books.map((book) => (
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} />}
                        <h1>{book.title}</h1>
                        <p>{book.description}</p>
                        <span>{book.price}</span>
                        <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                        <button className="update"><Link className="links" to={"/update/"+book.id}>Update</Link></button>
                    </div>
                ))}
            </div>

            <button className="addBtn"><Link className="links" to="/add">Add a Book</Link></button>
        </div>
    );

}

export default Books;
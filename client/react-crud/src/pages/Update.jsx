/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8800/books/"+id, book);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="form">
            <h2>Update the Book</h2>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <input type="text" placeholder="desc"  onChange={handleChange}name="desc" />
            <input type="number" placeholder="price" onChange={handleChange} name="price" />
            <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
            <button onClick={handleClick} className="formButton">Update</button>
        </div>
    )
}

export default Update;
import { BookContext } from "../context/BookContext"
import React, { useContext } from 'react'

const Navbar = () => {
    const {book} = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Reading list</h1>
            <p>currently you have {book.length} to get though ...</p>
        </div>
    );
}

export default Navbar;

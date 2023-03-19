import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext)
        const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_BOOK", book: {
            title,author
        }})
        setAuthor('')
        setTitle('')
    }
    return (  
        <form onSubmit={HandleSubmit}>
            <input type="text" required placeholder='Enter the title' value={ title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" required placeholder='Author' value={ author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="Add book" />
        </form>
    );
}

export default BookForm;
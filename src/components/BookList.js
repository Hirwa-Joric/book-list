import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { book } = useContext(BookContext);
    
    return book.length ? (
        <div className="book-list">
            <ul>
                {book.map(book => {
                    return(<BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">No books read </div>
    )
}

export default BookList;
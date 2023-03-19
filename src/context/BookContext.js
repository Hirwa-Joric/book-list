import React, { createContext,useReducer,useEffect} from 'react'
// import {v1 as uuid} from "uuid"
import { bookReducer } from '../reducers/BookReducer'

export const BookContext = createContext()

// const BookContextProvider = (props) => {
//     const [book, setBook] = useState([
//         {id:1 ,title:"the avengers end game", author:"Mark john"},
//         {id:2 ,title:"Then game of thrones", author:"Peter jack"}
//     ])
//     const addBook = (title, author) => {
//         setBook([...book, { title, author ,id:uuid()}])
//     }
//     const removeBook = (id) => {
//         setBook(book.filter(book => book.id !== id))
//     }
//     return (
//         <BookContext.Provider value={{book , addBook , removeBook}}>
//         {props.children}
//         </BookContext.Provider>
//     );
// }


///using reducers

const BookContextProvider = (props) => {
    
    const [book, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem("books")
        return localData ? JSON.parse(localData) : []
    })
    useEffect(() => {
    localStorage.setItem("books",JSON.stringify(book))
},[book])
    
    return ( 
        <BookContext.Provider value={{book ,dispatch}}>
        {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
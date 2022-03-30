import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../component/DataContext';
import axios from 'axios';
import AddToLibrary from '../component/AddToLibrary';

function BookPage() {

    const {BASE_URL, signin, currentBook, setCurrentBook} = useContext(DataContext)

    let { id } = useParams()

    const getBook = async () => {
        const book = await axios.get(`${BASE_URL}/find/book/${id}`)
        console.log(book)
        setCurrentBook(book.data.book)
    }

    useEffect( () => {
        getBook()
    }, [])

    return (
        <div className="info-book">
            <h1> {currentBook.title} </h1>
            <div className="info">
                <div className='info-picture' >
                    <img src={currentBook.book_cover} alt="Book cover"/>
                </div>
                <div className="info-text">
                    <h4>Description: {currentBook.description}</h4>
                    <h4>Genres:</h4>
                    <ul>
                        {currentBook.genre.map(type => {return <li>{type}</li>})}
                    </ul>
                </div>
            </div>
            {signin && <AddToLibrary />}
        </div>
    );
}

export default BookPage;
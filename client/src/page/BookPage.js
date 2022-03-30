import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../component/DataContext';
import axios from 'axios';
import AddToLibrary from '../component/AddToLibrary';

function BookPage() {

    const {BASE_URL, signin, currentBook, setCurrentBook} = useContext(DataContext)

    const [genres, setGenres] = useState()

    let { id } = useParams()

    const getBook = async () => {
        const book = await axios.get(`${BASE_URL}/find/book/${id}`)
        setCurrentBook(book.data.book)
    }

    const getGenres = async () => {
        const allGenres = await axios.get(`${BASE_URL}/find/genres`)
        setGenres(allGenres.data.genres)

        // currentBook.genre.forEach(type => {
            
        // })
    }

    useEffect( () => {
        //getBook()
        getGenres()
        
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
                    {console.log(currentBook.genre)}
                    <ul>
                        {currentBook.genre.map(type => {return <li key={type}>{type}</li>})}
                    </ul>
                    <div className="info-add">
                        {signin && <AddToLibrary />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookPage;
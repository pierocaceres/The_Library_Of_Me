import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../component/DataContext';
import axios from 'axios';
import AddToLibrary from '../component/AddToLibrary';

function BookPage() {

    const {BASE_URL, signin, currentBook} = useContext(DataContext)

    const [genres, setGenres] = useState()

    const getGenres = async () => {
        const allGenres = await axios.get(`${BASE_URL}/find/genres`)
        setGenres(allGenres.data.genres)
    }

    useEffect( () => {
        getGenres()
    }, [])

    return (
        <div className="book">
            <h1> {currentBook.title} </h1>
            <div className="info">
                <div className='info-picture' >
                    <img src={currentBook.book_cover} alt="Book cover"/>
                </div>
                <div className="info-text">
                    <h4>Description: {currentBook.description}</h4>
                    <h4>Genres:</h4>
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
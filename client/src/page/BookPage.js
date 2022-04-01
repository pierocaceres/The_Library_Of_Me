import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../component/DataContext';
import axios from 'axios';
import AddToLibrary from '../component/AddToLibrary';

function BookPage() {

    const {BASE_URL, signin, currentBook} = useContext(DataContext)

    const [genres, setGenres] = useState([])
    const [bookGenre, setBookGenre] = useState([])
    const [bookAuthor, setBookAuthor] = useState("")
    const [done, setDone] = useState(false)
    const [authorLoaded, setAuthorLoaded] = useState(false)
    const [genreLoaded, setGenreLoaded] = useState(false)

    const getGenresandAuthor = async () => {
        const getAuthor = await axios.get(`${BASE_URL}/find/author/${currentBook.author}`)
        setAuthorLoaded(true)
        setBookAuthor(getAuthor.data.author.name)
        const allGenres = await axios.get(`${BASE_URL}/find/genres`)
        setGenreLoaded(true)
        setGenres(allGenres.data.genres)
    }

    const getGenreName = () => {
        let genreNames = []
        currentBook.genre.forEach(genre => {
            const names = genres.filter(genreList => genreList._id === genre)
            genreNames = [...genreNames, names[0]]
        })
        setBookGenre(genreNames)
        setDone(true)
    }

    useEffect( () => {
        getGenresandAuthor()      
    }, [])

    useEffect( () => {
        if(authorLoaded && genreLoaded){
            getGenreName()
        }
    }, [genres])

    if(!done){
        return <div>Loading</div>
    }
    return (
        <div>
            <div className="book">
            <h2> {currentBook.title} </h2>
            <div className="info">
                <div className='info-picture' >
                    <img src={currentBook.book_cover} alt="Book cover"/>
                </div>
                <div className="info-text">
                    <h4>Description: </h4>
                    {currentBook.description}
                    <div className='genre-author'>
                        <div className='genre'>
                            <h4>Genres:</h4>
                            <ul>
                                {bookGenre && bookGenre.map(list => {return <li key={list._id}>{list.genre}</li>})}
                            </ul>
                        </div>
                        <div className='author'>
                            <h4>Author</h4>
                            {bookAuthor}
                        </div>
                    </div>
                    
                    <div className="info-add">
                        {signin && <AddToLibrary />}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BookPage;
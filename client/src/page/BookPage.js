import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../component/DataContext';
import axios from 'axios';
import BookInfo from '../component/BookInfo';
import DisplayGenres from '../component/DisplayGenres';
import AddToLibrary from '../component/AddToLibrary';

function BookPage() {

    const {BASE_URL, signin, currentBook} = useContext(DataContext)

    const [genres, setGenres] = useState([])
    const [bookGenre, setBookGenre] = useState([])
    const [bookAuthor, setBookAuthor] = useState("")
    const [done, setDone] = useState(false)

    const getGenresandAuthor = async () => {
        const getAuthor = await axios.get(`${BASE_URL}/find/author/${currentBook.author}`)
        setBookAuthor(getAuthor.data.author.name)
        const allGenres = await axios.get(`${BASE_URL}/find/genres`)
        setGenres(allGenres.data.genres)
    }

    const getGenreName = () => {
        let genreNames = []
        currentBook.genre.forEach(genre => {
            const names = genres.filter(genreList => genreList._id === genre)
            // console.log(names[0])  
            genreNames = [...genreNames, names[0]]
        })
        // console.log(genreNames)
        setBookGenre(genreNames)
        setDone(true)
    }

    const displayGenreName = () => {
        <DisplayGenres bookGenre={bookGenre}/>
        console.log("Hey")
    }

    useEffect( () => {
        getGenresandAuthor()      
    }, [])

    useEffect( () => {
        // console.log(genres)
        getGenreName()
    }, [genres])

    // useEffect( () => {
    //     displayGenreName()
    // }, [done])

    return (
        <div>
            <div className="book">
            <h1> {currentBook.title} </h1>
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
                                {done && displayGenreName()}  
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
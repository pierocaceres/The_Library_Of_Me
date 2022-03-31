import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../component/DataContext';
import axios from 'axios';
import AddToLibrary from '../component/AddToLibrary';

function BookPage() {

    const {BASE_URL, signin, currentBook} = useContext(DataContext)

    const [genres, setGenres] = useState([])
    const [bookGenre, setBookGenre] = useState([])
    const [bookAuthor, setBookAuthor] = useState("")

    let completedGet = false
    let author = ""

    const getGenresandAuthor = async () => {
        console.log(currentBook.author)
        const getAuthor = await axios.get(`${BASE_URL}/find/author/${currentBook.author}`)
        setBookAuthor(getAuthor.data.author.name)
        completedGet = true
        // const allGenres = await axios.get(`${BASE_URL}/find/genres`)
        // setGenres(allGenres.data.genres)
    }

    // const displayBooksGenres = async () => {
    //     currentBook.genre.forEach(type => {
    //         // console.log(type)
    //        const genreType = genres.filter(genre => genre._id === type)
    //        console.log(genreType)
    //        setBookGenre(...bookGenre, genreType[0])
    //     })
        
    //     console.log(bookGenre)
    //     completedGet = true
    // }

    useEffect( () => {
        getGenresandAuthor()       
    }, [])

    useEffect( () => {
        // console.log(genres)
        // displayBooksGenres()
    }, [author])

    return (
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
                                {/* {currentBook.genre.map(type => {return <li key={type}>{type}</li>})} */}
                                <li>Placeholder</li>
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
    )
}

export default BookPage;
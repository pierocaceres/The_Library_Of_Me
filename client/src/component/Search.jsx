import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext'
import axios from 'axios';

function Search() {

    const {BASE_URL, searchField, setSearchField, setSearch, setResults} = useContext(DataContext)

    const [radioOption, setRadioOption] = useState("Title")

    const getSearch = async () => {
        if (searchField !== '') {
            setSearch(true)

            if(radioOption === "Title"){
                let books = []
                const bookResult = await axios.get(`${BASE_URL}/find/books`)
                bookResult.data.books.forEach(book => {
                    if(book.title.toLowerCase().includes(searchField.toLowerCase())){
                        books.push(book)
                    }
                })
                setResults(books)
                
            }else if(radioOption === "Author"){
                const authorResult = await axios.get(`${BASE_URL}/find/authors`)
                const bookResult = await axios.get(`${BASE_URL}/find/books`)

                let authorNames = []
                authorResult.data.authors.forEach(author => {
                    if(author.name.toLowerCase().includes(searchField.toLowerCase())){
                        authorNames.push(author)
                    }
                })

                let books = []
                bookResult.data.books.forEach(book => {
                    const bookAuthor = authorNames.filter(author => book.author === author._id)
                    if(bookAuthor.length !== 0){
                        books.push(book)
                    }                        
                })
                setResults(books)
            }else if(radioOption === "Genre"){
                const genreResult = await axios.get(`${BASE_URL}/find/genres`)
                const bookResult = await axios.get(`${BASE_URL}/find/books`)

                let genreNames = []

                genreResult.data.genres.forEach(genre => {
                    if(genre.genre.toLowerCase().includes(searchField.toLowerCase())){
                        genreNames.push(genre)
                    }
                })

                if(searchField.toLowerCase() === 'fiction'){
                    genreNames = genreNames.filter(genre => genre.genre.toLowerCase() !== 'nonfiction')
                }

                let books = []
                bookResult.data.books.forEach(book => {
                    book.genre.forEach(individualGenre => {
                        genreNames.forEach(genre => {
                            if(individualGenre === genre._id){
                                books.push(book)
                            }
                        })
                    })                      
                })
                setResults(books)
            }
        }else if(searchField === ""){
            const result = await axios.get(`${BASE_URL}/find/books`)
            
            setResults(result.data.books)
            setSearch(true)
        }

        setSearchField("")
    }

    const handleSearch = (event) => {
        setSearchField(event.target.value)
    }

    const handleRadio = (event) => {
        setRadioOption(event.target.value)
    }

    return (
        <div className='search'>
            <div className="search-field">
                <input type="text" name="search" placeholder="Search by Title, Author, or Genre...." value={searchField} onChange={(event) => handleSearch(event)}/>
                <button onClick={getSearch}>Search</button>
            </div>
            <br/>
            <div className="radio-option" onChange={(event) => handleRadio(event)}>
                <input type="radio" name="search-type" value="Title" defaultChecked/>Title 
                <input type="radio" name="search-type" value="Author"/>Author 
                <input type="radio" name="search-type" value="Genre"/>Genre
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default Search;
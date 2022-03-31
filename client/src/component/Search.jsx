import React, { useContext } from 'react';
import { DataContext } from './DataContext'
import axios from 'axios';

function Search() {

    const {BASE_URL, searchField, setSearchField, setSearch, results, setResults} = useContext(DataContext)

    let radioOption = "Title"

    const getSearch = async () => {
        if (searchField !== '') {
            setSearch(true)

            if(radioOption === "Title"){
                const result = await axios.get(`${BASE_URL}/find/book/title/${searchField}`)
                setResults(result.data.books)
            }else if(radioOption === "Author"){
                const authorResult = await axios.get(`${BASE_URL}/find/book/author/${searchField}`)
                const bookResult = await axios.get(`${BASE_URL}/find`)

                const bookByAuthor = bookResult.data.books.filter(result => authorResult.data.author[0]._id === result.author)

                setResults(bookByAuthor)
            }else if(radioOption === "Genre"){
                // AXIOS call for Genre
                const genreResult = await axios.get(`${BASE_URL}/find/book/genres/${searchField}`)
                const bookResult = await axios.get(`${BASE_URL}/find`)

                console.log(bookResult)

                // Loop through Genre of each book to see if it has the genre we are looking for

                // const bookByGenre = bookResult.data.books.filter(result => genreResult.data.genre[0]._id === result.)

                //setResults(bookByGenre)
            }
        }else if(searchField === ""){
            const result = await axios.get(`${BASE_URL}/find`)
            
            setResults(results => result.data.books)
            setSearch(true)
        }

        setSearchField("")
        
        // var ele = document.getElementsByName("search-type");
        // for(var i=0;i<ele.length;i++){
        //     ele[i].checked = false;
        // }
    }

    const handleSearch = (event) => {
        setSearchField(event.target.value)
    }

    const handleRadio = (event) => {
        radioOption = event.target.value
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
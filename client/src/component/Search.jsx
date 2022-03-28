import React, {useContext, useState } from 'react';
import { DataContext } from './DataContext'

function Search() {

    //const { search, setSearch } = useContext(DataContext)
    const [search, setSearch] = useState("")

    const getSearch = async () => {
        if (search !== '') {
            
        }
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleRadio = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <input type="text" name="search" placeholder="Search by title, author, genre...." value={search} onChange={(event) => handleSearch(event)}/>
            <button onClick={getSearch}>Submit</button>
            <br/>
            <div onChange={(event) => handleRadio(event)}>
                <input type="radio" name="search-type" value="Title"/>Title
                <input type="radio" name="search-type" value="Author"/>Author
                <input type="radio" name="search-type" value="Genre"/>Genre
            </div>
        </div>
    );
}

export default Search;
import React, { useContext } from 'react';
import { DataContext } from './DataContext'
import axios from 'axios';

function Search() {

    const {BASE_URL, searchField, setSearchField, setSearch, results, setResults} = useContext(DataContext)

    let radioOption = ""

    const getSearch = async () => {
        if (searchField !== '') {
            setSearch(true)
            //console.log(searchField)
            if(radioOption === "Title"){
                const result = await axios.get(`${BASE_URL}/find/${searchField}`)
                setResults(result.data.books)
                console.log(results)
            }else if(radioOption === "Author"){
                console.log(`Search by ${radioOption}`)
            }else if(radioOption === "Genre"){
                console.log(`Search by ${radioOption}`)
            }
        }else if(searchField === "" && radioOption === ""){
            const result = await axios.get(`${BASE_URL}/find`)
            
            setResults(result.data.books)
            setSearch(true)
            
            console.log(result.data.books) // Books were called from the database
            console.log(results)
        }
    }

    const handleSearch = (event) => {
        setSearchField(event.target.value)
    }

    const handleRadio = (event) => {
        radioOption = event.target.value
    }

    return (
        <div>
            <div className="search-field">
                <input type="text" name="search" placeholder="Search by Title, Author, or Genre...." value={searchField} onChange={(event) => handleSearch(event)}/>
                <button onClick={getSearch}>Submit</button>
            </div>
            <br/>
            <div className="radio-option" onChange={(event) => handleRadio(event)}>
                <input type="radio" name="search-type" value="Title"/>Title 
                <input type="radio" name="search-type" value="Author"/>Author 
                <input type="radio" name="search-type" value="Genre"/>Genre
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default Search;
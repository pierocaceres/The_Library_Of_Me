import React, {useContext, useState } from 'react';
import { DataContext } from './DataContext'

function Search(props) {

    //const { searchField, setSearchField } = props
    const {searchField, setSearchField, setSearch} = useContext(DataContext)

    let radioOption = ""

    const getSearch = async () => {
        if (searchField !== '') {
            setSearch(true)
            console.log(searchField)
            if(radioOption === "Title"){
                console.log(`Search by ${radioOption}`)
            }else if(radioOption === "Author"){
                    console.log(`Search by ${radioOption}`)
            }else if(radioOption === "Genre"){
                console.log(`Search by ${radioOption}`)
            }
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
        </div>
    );
}

export default Search;
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import axios from 'axios';

function AddToLibrary() {

    const {BASE_URL, user, currentBook } = useContext(DataContext)

    let alreadyInLibrary = false

    let navigate = useNavigate()

    // Check to see if the user has the book in their library or not

    if(user.books.length === 0){ alreadyInLibrary = false}
    else{
        const foundBook = user.books.find(book => book._id === currentBook._id)
        if(foundBook){
            alreadyInLibrary = true
        }else{
            alreadyInLibrary = false
        }
    }

    const addBook = async () => {   
        user.books.push(currentBook)
        await axios.post(`${BASE_URL}/library/addToLibrary`, user)
        alreadyInLibrary = true
        navigate(`/book/${currentBook._id}`)
    }

    return (
        <div>
            {!alreadyInLibrary && <button className="button-add" onClick={() => addBook()}>Add to Library</button>}
        </div>
    );
}

export default AddToLibrary;
import React, { useContext } from 'react';
import DataContext from './DataContext';
import axios from 'axios';

function AddToLibrary() {

    const {BASE_URL, signin, user, currentBook, setCurrentBook} = useContext(DataContext)

    let alreadyInLibrary = false
    
    console.log(user.books.length)
    console.log(currentBook)

    // Check to see if the user has the book in their library or not

    if(user.books.length === 0){ alreadyInLibrary = false}
    else{
        const foundBook = user.books.find(bookId => bookId === currentBook._id)
        if(foundBook){
            alreadyInLibrary = true
        }else{
            alreadyInLibrary = false
        }
    }

    const addBook = async () => {
        // Get current book and add to users books array
        
        user.books.push(currentBook)
        console.log(user)
        await axios.post(`${BASE_URL}/addToLibrary`, user)
        alreadyInLibrary = true

    }

    return (
        <div>
            {!alreadyInLibrary && <button onClick={() => addBook()}>Add to Library</button>}
        </div>
    );
}

export default AddToLibrary;
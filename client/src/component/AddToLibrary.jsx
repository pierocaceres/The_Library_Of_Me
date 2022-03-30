import React, { useContext } from 'react';
import DataContext from './DataContext';
import axios from 'axios';

function AddToLibrary() {

    const {BASE_URL, signin, currentBook, setCurrentBook} = useContext(DataContext)

    return (
        <div>
            Add me
        </div>
    );
}

export default AddToLibrary;
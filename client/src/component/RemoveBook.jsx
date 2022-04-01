import React, { useContext } from 'react';
import axios from 'axios';
import DataContext from './DataContext';

function RemoveBook(props) {

    const {BASE_URL, user, setUser} = useContext(DataContext)

    let temp = {
        username: user.username,
        book: props.book
    }

    const removeBookFromLibrary = async () => {    
        await axios.post(`${BASE_URL}/library/removeFromLibrary`, temp)
        const updatedUserInfo = await axios.get(`${BASE_URL}/users/${user._id}`)
        setUser(updatedUserInfo.data.users)
    }
    return (
        <div>
            <button className='button-remove' onClick={() => removeBookFromLibrary()}>Remove Book</button>
        </div>
    );
}

export default RemoveBook;
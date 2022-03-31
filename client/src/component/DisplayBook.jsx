import React from 'react';

function DisplayBook(props) {

    return (
        <div className='book-display'>
            <img src={props.book_cover} alt={`${props.title} cover`}/>
            <h3>{props.title}</h3>            
        </div>
    );
}

export default DisplayBook;
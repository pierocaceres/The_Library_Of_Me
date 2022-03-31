import React from 'react';
import RemoveBook from './RemoveBook';

function DisplayBook(props) {

    return (
        <div className="container">
            <div className='book-display'>
                <img src={props.book_cover} alt={`${props.title} cover`}/>
                <h4>{props.title}</h4>
            </div>
            <div className="remove-button">
                <RemoveBook 
                    book={props.book}
                />
            </div>
        </div>
    );
}

export default DisplayBook;


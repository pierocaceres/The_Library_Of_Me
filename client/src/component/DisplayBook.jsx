import React from 'react';
import RemoveBook from './RemoveBook';

function DisplayBook(props) {

    return (
        
            <div className='book-display'>
                <img src={props.book_cover} alt={`${props.title} cover`}/>
                <h3>{props.title}</h3>
                <div className="remove-button">
                    <RemoveBook 
                        book={props.book}
                    />
                </div>
            </div>
        
    );
}

export default DisplayBook;
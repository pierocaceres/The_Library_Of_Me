import React from 'react';

function DisplayResult(props) {

    return (
        <div className='card'>
            <img src={`${props.book_cover}`} alt="Book cover"/>
            <h3>{props.name}</h3>            
        </div>
    );
}

export default DisplayResult;
import React from 'react';

function DisplayResult(props) {

    return (
        <div className='card'>
            <img src={`${props.image}`} alt="Book cover"/>
            <h3>{props.name}</h3>            
        </div>
    );
}

export default DisplayResult;
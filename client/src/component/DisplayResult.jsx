import React from 'react';

function DisplayResult(props) {

    return (
        <div className='card' onClick={props.onClick}>
            <img src={`${props.image}`} alt="Book cover"/>
            <h3>{props.title}</h3>            
        </div>
    );
}

export default DisplayResult;
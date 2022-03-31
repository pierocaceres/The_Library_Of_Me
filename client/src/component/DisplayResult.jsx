import React from 'react';

function DisplayResult(props) {

    return (
        <div className='card' onClick={props.onClick}>
            <img src={`${props.image}`} alt="Book cover"/>
            <h4>{props.title}</h4>            
        </div>
    );
}

export default DisplayResult;
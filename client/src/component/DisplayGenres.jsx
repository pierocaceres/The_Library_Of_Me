import React from 'react';

function DisplayGenres(props) {
    console.log("yo")
    return (
        <div>
            {props.bookGenre.map(list => {return <li key={list._id}>{list.genre}</li>})}
        </div>
    );
}

export default DisplayGenres;
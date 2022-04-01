import React, { useContext} from 'react';
import DataContext from './DataContext';
import DisplayGenres from './DisplayGenres';
import AddToLibrary from './AddToLibrary';

function BookInfo(props) {

    const {signin, currentBook} = useContext(DataContext)

    return (
        <div className="book">
            <h1> {currentBook.title} </h1>
            <div className="info">
                <div className='info-picture' >
                    <img src={currentBook.book_cover} alt="Book cover"/>
                </div>
                <div className="info-text">
                    <h4>Description: </h4>
                    {currentBook.description}
                    <div className='genre-author'>
                        <div className='genre'>
                            <h4>Genres:</h4>
                            <ul>
                                <DisplayGenres bookGenre={props.bookGenre}/>  
                            </ul>
                        </div>
                        <div className='author'>
                            <h4>Author</h4>
                            {props.bookAuthor}
                        </div>
                    </div>
                    
                    <div className="info-add">
                        {signin && <AddToLibrary />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookInfo;
import React, { useContext } from 'react';
import DataContext from '../component/DataContext'
import DisplayBook from '../component/DisplayBook';

function MyLibrary() {

    const {user} = useContext(DataContext)

    let greetingMessage = ""

    if(user.books.length === 0){
        greetingMessage = "Your library is empty. Let's add books!"
    }else{
        greetingMessage = "Check out your library below"
    }

    return (
        <div>
            <h3>Hi {user.name}</h3>
            <h4>{greetingMessage}</h4>
            <div className="container-grid">
                {user.books.length > 0 && user.books.map((book) => (
                    <DisplayBook key={book._id}
                        book={book}
                        book_cover={book.book_cover}
                        title={book.title}
                        bookId={book._id}
                    />
                ))}
            </div>
        </div>
      )
}

export default MyLibrary;
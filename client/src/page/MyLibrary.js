import React, { useContext, useEffect } from 'react';
import DataContext from '../component/DataContext'
import DisplayBook from '../component/DisplayBook';

function MyLibrary() {

    const {user} = useContext(DataContext)

    let greetingMessage = ""
    let booksInLibrary = false

    if(user.books.length === 0){
        greetingMessage = "Your library is empty. Let's add books!"
    }else{
        greetingMessage = "Check out your library below"
        booksInLibrary = true
    }

    // return (
    //     <div>
    //         <div className="welcome-user">
    //             <h3>Welcome {user.name}</h3>
    //         </div>
    //         <div className="library">
    //             {!booksInLibrary && greetingMessage}
    //             {booksInLibrary && greetingMessage}
    //             {user.books.map((book) => (
    //                 <DisplayBook key={book._id}
    //                     book_cover={book.book_cover}
    //                     title={book.title}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );

    // Instead of using books in library, use books.length is not 0 to render the items

    return (
        <div>
            <h3>{greetingMessage}</h3>
            <div className="container-grid">
                {user.books.length > 0 && user.books.map((book) => (
                    <DisplayBook key={book._id}
                        book_cover={book.book_cover}
                        title={book.title}
                    />
                ))}
            </div>
        </div>
      )
}

export default MyLibrary;
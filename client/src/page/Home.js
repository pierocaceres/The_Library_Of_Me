import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../component/DataContext'
import Search from '../component/Search';
import DisplayResult from '../component/DisplayResult';


function Home() {

    const {BASE_URL, search, results, setSearch, setCurrentBook} = useContext(DataContext)

    let navigate = useNavigate()

    useEffect( () => {
        setSearch(false)
    }, [])

    const selectedBook = async (id) => {
        const book = await axios.get(`${BASE_URL}/find/book/${id}`)
        setCurrentBook(book.data.book)
        navigate(`/book/${id}`)
    }

    return (
        <div>
            <Search />
            {search && <h3>Search Results</h3>}
            <div className="container-grid">
                {search && results.map((result) => (
                    <DisplayResult key={result._id}
                        title={result.title}
                        image={result.book_cover}
                        onClick={() => selectedBook(result._id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
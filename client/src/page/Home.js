import React, { useContext, useEffect } from 'react';
import { DataContext } from '../component/DataContext'
import Search from '../component/Search';
import DisplayResult from '../component/DisplayResult';
import { useNavigate } from 'react-router-dom';

function Home() {

    const {search, results} = useContext(DataContext)

    let navigate = useNavigate()

    // useEffect( () => {
        
    // }, [])

    return (
        <div>
            <Search />
            {search && <h3>Search Results</h3>}
            <div className="container-grid">
                {search && results.map((result) => (
                    <DisplayResult key={result._id}
                        title={result.title}
                        image={result.book_cover}
                        onClick={() => navigate(`/book/${result._id}`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
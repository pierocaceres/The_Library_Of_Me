import React, { useContext, useEffect } from 'react';
import { DataContext } from '../component/DataContext'
import Search from '../component/Search';
import DisplayResult from '../component/DisplayResult';

function Home() {

    const {search, results} = useContext(DataContext)

    useEffect( () => {
        
    }, [])

    return (
        <div>
            <Search />
            <h3>Search Results</h3>
            <div className="container-grid">
                {search && results.map((result) => (
                    <DisplayResult key={result._id}
                        title={result.title}
                        image={result.book_cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
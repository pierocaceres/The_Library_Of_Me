import React, { useContext, useEffect } from 'react';
import { DataContext } from '../component/DataContext'
import Search from '../component/Search';
import DisplayResult from '../component/DisplayResult';

function Home() {

    const {search, results} = useContext(DataContext)

    const showResults = () => {
        console.log(results)
        results.map((result) => (
            <DisplayResult key={result._id}
                title={result.title}
                image={result.book_cover}
            />
        ))
    }

    useEffect( () => {

    }, [])

    return (
        <div>
            <Search />
            <h3>Search Results</h3>
            {search && showResults()}
        </div>
    );
}

export default Home;


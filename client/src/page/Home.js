import React, { useContext } from 'react';
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
                book_cover={result.book_cover}
            />
        ))
    }

    return (
        <div>
            <Search />
            {search && showResults()}
        </div>
    );
}

export default Home;


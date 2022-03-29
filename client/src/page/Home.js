import React, { useContext } from 'react';
import { DataContext } from '../component/DataContext'
import Search from '../component/Search';
import DisplayResult from '../component/DisplayResult';

function Home() {

    const {search, results} = useContext(DataContext)

    const DisplayResult = () => {
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
            {search && DisplayResult()}
        </div>
    );
}

export default Home;


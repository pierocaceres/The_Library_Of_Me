import React, { useContext } from 'react';
import { DataContext } from '../component/DataContext'
import Search from '../component/Search';
import DisplayResult from '../component/DisplayResult';

function Home() {

    const {search} = useContext(DataContext)

    return (
        <div>
            <Search />
            {search && <DisplayResult /> }
        </div>
    );
}

export default Home;
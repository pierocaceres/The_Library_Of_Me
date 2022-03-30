import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

function Nav() {

    const {signin} = useContext(DataContext)

    return (
        <div className="title-nav">
            <div className="website-title">
                <h1>The Library of Me</h1>
            </div>
            <div className="nav">
                <Link to="/">Home</Link>
                {!signin && <Link to="/signin">Sign in</Link>}
                {signin && <Link to="/:username/my_books">My Library</Link>}
                {signin && <Link to="/signout">Sign out</Link>}
            </div>
        </div>
    );
}

export default Nav;
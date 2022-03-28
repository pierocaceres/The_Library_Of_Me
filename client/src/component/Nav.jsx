import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

function Nav() {

    const {signin, setSignin } = useContext(DataContext)

    return (
        <div className="title-nav">
            <div className="website-title">
                The Library of Me
            </div>
            <div className="nav">
                <Link to="/">Home</Link>
                {!signin && <Link to="/signin">Signin</Link>}
                {signin && <Link to="/:username/my_books">My Books</Link>}
            </div>
        </div>
    );
}

export default Nav;
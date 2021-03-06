import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from './DataContext'

function Nav() {

    const {signin, user} = useContext(DataContext)
    
    let navigate = useNavigate()

    const home = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div className="title-nav">
            <div className="website-title">
                <h1 onClick={(e) => home(e)}>The Library of Me</h1>
                {/* <img src="../../../assets/bookshelf.jpg" alt='icon'/> */}
            </div>
            <div className="nav">
                {!signin && <Link to="/register">Register</Link>}
                {!signin && <Link to="/signin">Sign in</Link>}
                {signin && <Link to={`/${user.username}/my_library`}>My Library</Link>}
                {signin && <Link to="/signout">Sign out</Link>}
            </div>
        </div>
    );
}

export default Nav;
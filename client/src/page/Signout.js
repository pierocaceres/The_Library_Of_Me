import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../component/DataContext'

function Signout() {

    const { setSignin, setUser} = useContext(DataContext)

    let navigate = useNavigate()

    const closeSession = () => {
        setSignin(false)
        setUser([])
        navigate('/')
    }

    closeSession()

    return (
        <div>

        </div>
    );
}

export default Signout;
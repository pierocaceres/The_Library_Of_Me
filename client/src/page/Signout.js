import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../component/DataContext'

function Signout() {

    const {signin, setSignin, setUser} = useContext(DataContext)

    let navigate = useNavigate()

    const closeSession = () => {
        setSignin(false)
        setUser([])
    }

    useEffect( () => {
        setInterval(10000, navigate('/'))
    }, [!signin])

    //closeSession()

    return (
        <div>
            <h3>See you soon...</h3>
            {/* {closeSession} */}
            
        </div>
    );
}

export default Signout;
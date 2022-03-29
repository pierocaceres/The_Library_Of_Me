import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import DataContext from '../component/DataContext';
import axios from 'axios';

function Signin() {

    const {BASE_URL, setSignin, setUser, user} = useContext(DataContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const confirmUser = async () => {
        const users = await axios.get(`${BASE_URL}/users`)
        
        //console.log(users.data.users)
        const foundUser = users.data.users.find(user => user.username === username)
        console.log(foundUser)
        if(foundUser){
            console.log(`Username is a match`)
            if(foundUser.password === password){
                console.log(`password is a match`)
                setSignin(true)
                setUser(foundUser)
                navigate('/')
                console.log(user)
            }else{
                console.log(`Incorrect password`)
            }
        }else{
            console.log(`Incorrect username`)
        }
    }

    return (
        <div>
            <div className='signin'>
                username: <input type="text" name="username" placeholder="Enter your name" value={username} onChange={(event) => handleUsername(event)}/>
                <br/>
                password: <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(event) => handlePassword(event)}/>
                <br/>
            </div>
            <button onClick={navigate('/register')}>Register</button>
            <button onClick={confirmUser}>Sign in</button>            
        </div>
    );
}

export default Signin;
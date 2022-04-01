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
        
        const foundUser = users.data.users.find(user => user.username === username)
        console.log(foundUser)
        if(username === "" && password === ""){
            alert("Enter username and password")
        }else{
            if(foundUser){
                if(foundUser.password === password){
                    setSignin(true)
                    setUser(foundUser)
                    navigate('/')
                }else{
                    alert("incorrect password")
                }
            }else{
                alert("Incorrect username or password")
            }
        }
    }

    const goToRegister = () => {
        navigate('/register')
    }

    return (
        <div className='page-signin'>
            <div className='signin'>
                Username: <input type="text" name="username" placeholder="Enter your username" value={username} onChange={(event) => handleUsername(event)}/>
                <br/>
                Password: <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(event) => handlePassword(event)}/>
                <br/>
            </div>
            <br/>
            {/* <button onClick={goToRegister}>Register</button> */}
            <button className='button-signin' onClick={confirmUser}>Sign in</button>            
        </div>
    );
}

export default Signin;
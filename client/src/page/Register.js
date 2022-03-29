import React, { useContext, useState } from 'react';
import DataContext from '../component/DataContext';
import axios from 'axios';

function Register() {

    const {BASE_URL} =  useContext(DataContext)

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    
    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const checkUserName = async () => {
        if(password !== '' && password === confirmPassword){
            const users = await axios.get(`${BASE_URL}/users`)
            const foundUser = users.data.users.find(user => user.username === username)
            if(!foundUser){
                console.log(`Username is availabe`)
                
                const createUser = {
                    name: name,
                    username: username,
                    password: password,
                }

                await axios.post(`${BASE_URL}/createUser`, createUser)

            }else{
                console.log(`Username already exist.`)
            }

        }else{
            console.log(`Passwords do not match`)
        }
    }

    return (
        <div className="container">
            <div className="info">
                <div className="title">
                    <h3>Registration</h3>
                </div>
                <div>
                    <p>Please fill out the fields below.</p>
                </div>
                <div className='register'>
                    Name: <input type="text" name="name" placeholder="Enter your name" value={name} onChange={(event) => handleName(event)}/>
                    <br/>
                    username: <input type="text" name="username" placeholder="Enter your name" value={username} onChange={(event) => handleUsername(event)}/>
                    <br/>
                    password: <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(event) => handlePassword(event)}/>
                    <br/>
                    Confirm password: <input type="password" name="password" placeholder="Confirm your password" value={confirmPassword} onChange={(event) => handleConfirmPassword(event)}/>
                    <br/>
                </div>
                <button onClick={checkUserName}>Submit</button>
            </div>
        </div>
    );
}

export default Register;
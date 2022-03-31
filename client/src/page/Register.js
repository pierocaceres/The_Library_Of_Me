import React, { useContext, useState } from 'react';
import DataContext from '../component/DataContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const {BASE_URL} =  useContext(DataContext)

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    let navigate = useNavigate()

    
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
                alert("Your account has been created")
                navigate("/signin")
                
                const createUser = {
                    name: name,
                    username: username,
                    password: password,
                }

                await axios.post(`${BASE_URL}/users/createUser`, createUser)

            }else{
                // console.log(`Username already exist.`)
                alert(`Username already exist.`)
            }

        }else{
            //console.log(`Passwords do not match`)
            alert(`Passwords do not match`)
        }
    }

    return (
        <div className="registration-container">
            <div className='registration-left'></div>
            <div className="registration">
                <div className="title">
                    <h3>Registration</h3>
                </div>
                <div>
                    <p>Please fill out the fields below.</p>
                </div>
                <form className='register'>
                    Name <br/><input type="text" name="name" placeholder="Enter your name" value={name} onChange={(event) => handleName(event)}/>
                    <br/>
                    Username <br/><input type="text" name="username" placeholder="Enter your username" value={username} onChange={(event) => handleUsername(event)}/>
                    <br/>
                    Password <br/><input type="password" name="password" placeholder="Enter your password" value={password} onChange={(event) => handlePassword(event)}/>
                    <br/>
                    Confirm password <br/><input type="password" name="password" placeholder="Confirm your password" value={confirmPassword} onChange={(event) => handleConfirmPassword(event)}/>
                    <br/>
                </form>
                <br/>
                <button onClick={checkUserName}>Submit</button>
            </div>
            <div className='registration-right'></div>
        </div>
    );
}

export default Register;
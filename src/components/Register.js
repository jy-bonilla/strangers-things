import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCon, setPasswordCon] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('username: ', username);
        console.log('password: ', password);
        console.log('passwordCon:', passwordCon)
        setUsername('');
        setPassword('');
        setPasswordCon('')
    }

    const handleChange = (event) => {
        setUsername(event.target.value);
    }
    //Register a user by submitting form info to POST /api/COHORT-NAME/users/register
    // fetch('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/users/register', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         user: {
    //             username: username,
    //             password: password
    //         }
    //     })
    // }).then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(console.error);





    return (
        <div id='container'>
            <div id='navbar'>
                Form
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <label htmlFor='password-confirm'>Confirm Password:</label>
                <input type='password' name='password-confirm' value={password} onChange={(event) => setPasswordCon(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}



export default Register;
import React, { useState } from "react";
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [ login, setLogin ] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });

  const handleChanges = e => {
    setLogin({
      credentials: {
        ...login.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const loginPost = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', login.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Welcome To Color Bubbles!</h1>
      <h3>Please log in below:</h3>
      <form onSubmit={loginPost} style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly', height: '200px', alignItems: 'center'}}>
      <TextField
        id="username-input"
        label="Username"
        type="username"
        name="username"
        value={login.credentials.username}
        onChange={handleChanges}
      />
      <TextField
        id="password-input"
        label="Password"
        type="password"
        name="password"
        value={login.credentials.password}
        onChange={handleChanges}
      />
        <Button
        variant="contained"
        color="primary"
        type="submit"
        >
          Log in
        </Button>
      </form>
    </div>
  );
}

export default Login;

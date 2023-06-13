import React, { useState } from 'react';
import UserService from '../services/UserService';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../img/avatar.svg';
import wave from '../img/wave.png';
import bg from '../img/bg.svg'
import Navbar from './Navbar';

const LoginComponent = ( ) => {
  const [password, setPassword] = useState('');
  const [userName,setUserName] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

//   const handleLogin = (userId) => {
//     navigate(`/user/userId=${userId}`);
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Make an API request to the server to authenticate the user
      const response = await UserService.loginUser(userName, password);

      if (response.status === 200) {
        // User is authenticated, perform login actions
        console.log('User logged in:', userName);
        navigate(`/user/${userName}`)
        
        // Reset the form
        setUserName('');
        setPassword('');
      } else {
        // Authentication failed, display error message
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <>
    <Navbar />
    <div className="login">
      <img src={wave}  className="wave" />
      <img src={bg} style={{width:500,height:400,marginRight:550,marginTop:-100}} />
      <div style={{marginTop:-300,marginLeft:500}}>
      <h2 style={{position:'relative',top:-50,right:-50,fontFamily:'cursive',color: '#333'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
      
        <div className="fields">
          <label htmlFor="text" style={{margin:20}}>User Name</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleUserNameChange}
            required
            style={{height:30,marginTop:20}}
          />
        </div>
        <div className="fields">
          <label htmlFor="password" style={{margin:20}}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{height:30,marginTop:20,marginLeft:10}}
          />
        </div>
        <Link class="btn btn-primary" type="submit" to={`/user/${userName}`} style={{marginLeft:100}}>Login</Link>
      </form>
      </div>
    </div>
    </>
  );
};

export default LoginComponent;

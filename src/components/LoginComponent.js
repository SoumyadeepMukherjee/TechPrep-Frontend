import React, { useState } from 'react';
import UserService from '../services/UserService';
import { Link } from 'react-router-dom';

const LoginComponent = ( {history} ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName,setUserName] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
      const response = await UserService.loginUser(email, password);

      if (response.status === 200) {
        // User is authenticated, perform login actions
        console.log('User logged in:', email);
        
        history.push(`user/${userName}`)
        // Reset the form
        setEmail('');
        setPassword('');
      } else {
        // Authentication failed, display error message
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="text">User Name:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleUserNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Link class="btn btn-primary" type="submit" to={`/user/${userName}`}>Login</Link>
      </form>
    </div>
  );
};

export default LoginComponent;

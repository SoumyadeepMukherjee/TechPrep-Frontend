import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import CategoryComponent from './CategoryComponent';
import { useParams } from 'react-router-dom';

const UserDashboardComponent = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { userName }=useParams();

  useEffect(() => {
    if (userName)
        fetchUserProfile(userName);
  }, [userName]);

  const fetchUserProfile = async (userName) => {
    try {
      // Make an API request to fetch user profile
      const response = await UserService.fetchUser(userName);
        console.log(response.data)
      if (response.status === 200) {
        // Set the user profile in state
        setUserProfile(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      {userProfile && (
        <div>
          <h3>User Profile</h3>
          <h5>Name: {userProfile.firstName} {userProfile.lastName}</h5>
          <h5>Email: {userProfile.email}</h5>
          <h5>User Name: {userProfile.username}</h5>
          <h5>Phone Number: {userProfile.phone}</h5>
        </div>
      )}
        <div>
          <h3>Categories</h3>
          
          <CategoryComponent />
        </div>
    </div>
  );
};

export default UserDashboardComponent;

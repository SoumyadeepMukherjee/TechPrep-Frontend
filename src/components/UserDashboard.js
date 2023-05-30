import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import CategoryComponent from './CategoryComponent';
import { useParams } from 'react-router-dom';
import QuizResultsComponent from './QuizResultsComponent';

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
      {userProfile && (
        <div>
          <h3>User Profile</h3>
          <h5>Name: {userProfile.firstName} {userProfile.lastName}</h5>
          <h5>Email: {userProfile.email}</h5>
          <h5>User Name: {userProfile.username}</h5>
          <h5>Phone Number: {userProfile.phone}</h5>
          <table className = "table table-striped">
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Category Description</th>
                    </tr>

                </thead>
                <tbody>
          {userProfile.userScores.map(
                                user =>
                                <tr key = {user.scoreId}>
                                    <td> { user.qid }</td>
                                    <td> {user.score }</td>   
                                    <td>{user.examDate}</td>
                          
                                </tr>

                        )}
                        </tbody>
                        </table>

        </div>
      )}
      <br />
        <div>
          <h3>Categories</h3>
          
          <CategoryComponent />
        </div>

        <div>
          <QuizResultsComponent />
        </div>
    </div>
  );
};

export default UserDashboardComponent;

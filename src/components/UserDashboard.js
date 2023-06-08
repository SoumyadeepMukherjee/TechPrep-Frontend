import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import CategoryComponent from './CategoryComponent';
import { useNavigate, useParams,useLocation } from 'react-router-dom';

const UserDashboardComponent = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { userName }=useParams();
  const navigate=useNavigate();
  const location = useLocation();

  useEffect(() => {
    //const userName = location.pathname.split('/').pop();
    if (userName) {
      fetchUserProfile(userName);
    }
  }, [location]);

  const handleStartQuiz = (qid, title) => {
    //const userName = location.pathname.split('/').pop();
    navigate(`/questions/${qid}/${title}/${userName}`);
  };


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
          <br />
          <h3>Results of Quizzes Attempted</h3>
          <table className = "table table-striped">
                <thead>
                    <tr>
                        <th>Quiz Id</th>
                        <th>Number of Correct Answers</th>
                        <th>Score</th>
                        <th>Exam Date & Time</th>
                    </tr>

                </thead>
                <tbody>
                        {userProfile.userScores.map(
                                user =>
                                <tr key = {user.scoreId}>
                                    <td>{user.qid }</td>
                                    <td>{user.correctAns}</td>
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
        <CategoryComponent handleStartQuiz={handleStartQuiz} />
        </div>

    </div>
  );
};

export default UserDashboardComponent;

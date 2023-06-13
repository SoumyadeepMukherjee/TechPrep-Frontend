import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import { useParams, useLocation } from 'react-router-dom';
import Navbar2 from './Navbar2';
import CategoryComponent from './CategoryComponent';

const UserDashboardComponent = () => {
  
  // const handleStartQuiz = (qid, title) => {
  //   navigate(`/questions/${qid}/${title}/${userName}`);
  // };
  const { userName } = useParams();
  const [userProfile, setUserProfile] = useState(null);
    
    const location = useLocation();
  const name = userName;
    useEffect(() => {
        if (userName) {
            fetchUserProfile(userName);
        }
    }, [location]);

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
        <>
            <Navbar2 name={userName} />

            <CategoryComponent />
        </>
    );
};

export default UserDashboardComponent;


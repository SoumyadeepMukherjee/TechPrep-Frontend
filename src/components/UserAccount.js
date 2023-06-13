import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import { useParams, useLocation } from 'react-router-dom';
import Navbar2 from './Navbar2';
import profile from '../img/userdp.jpg';

const UserAccount = () => {
    const [userProfile, setUserProfile] = useState(null);
    const location = useLocation();
    const { userName } = useParams();

    useEffect(() => {
        if (userName) {
            fetchUserProfile(userName);
            console.log(userName);
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
            <Navbar2 />

            <div className="user-profile">
                <img src={profile} style={{borderRadius:"50%"}} />
                <br />
                <div>
                    {userProfile && (
                        <div>
                            <h3>User Profile</h3>
                            <br />
                            <h5><b>Name:</b>{userProfile.firstName} {userProfile.lastName}</h5>
                            <h5><b>Email:</b>{userProfile.email}</h5>
                            <h5><b>User Name:</b>{userProfile.username}</h5>
                            <h5><b>Phone Number:</b>{userProfile.phone}</h5>
                            <br />
                        </div>
                    )}
                </div>
            </div>

        </>
    );

}

export default UserAccount;

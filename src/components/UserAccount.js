import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import { useParams, useLocation } from 'react-router-dom';
import Navbar2 from './Navbar2';
import avatar from '../img/avatar.svg';

const UserAccount = () => {
    const [userProfile, setUserProfile] = useState(null);
    const location = useLocation();
    const { userName } = useParams();
    const currentTime=new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
  
    const finalDate= currentDate+" "+ currentTime+ " "+"hours";
   
    
    useEffect(() => {
        document.title = "TechPrep || User Profile"
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
                <img src={avatar} style={{borderRadius:"50%",height:"200px",marginTop:"20px",marginBottom:"10px"}} />
                <br />
                <div>
                    {userProfile && (
                        <div>
                            <h3>User Profile</h3>
                            <br />
                            <table className="table table-hover">

                                <tbody>
                                    <tr>
                                        <th className="row"><b>Name:</b></th>
                                        <td>{userProfile.firstName} {userProfile.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th className="row"><b>Email:</b></th>
                                        <td>{userProfile.email}</td>
                                    </tr>
                                    <tr>
                                        <th className="row"><b>User Name:</b></th>
                                        <td>{userProfile.username}</td>
                                    </tr>
                                    <tr>
                                        <th className="row"><b>Phone Number:</b></th>
                                        <td>{userProfile.phone}</td>
                                    </tr>
                                   


                                </tbody>

                            </table>
                            <br />
                        </div>
                    )}
                </div>
            </div>

        </>
    );

}

export default UserAccount;

// import React from 'react';

import {  useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { BaseUrl, post } from '../services/Endpoint';
import "./MyHome.css";
import All from "./All"

const MyHome = () => {
    const navigate = useNavigate(); // Initialize navigate
    const user = useSelector((state) => state.auth.user);
    
    const handleLogout = async () => {
        try {
            const request = await post("/auth/logout");
            const response = request.data;
            if (request.status === 200) {
                toast.success(response.message);
                navigate('/login'); // Redirect to login after successful logout
            }
        } catch (error) {
            console.log('Error during logout:', error);
            toast.error("Logout failed! Please try again.");
        }
    };

    return (
        <>
            {/* Navbar */}
            <nav className="ynavbar">
                <div className="ynavbar-content">
                    <div className="ynavbar-title">RitsVerse</div>
                    <div className="yuser-info">
                        
                        <img
                            src={user.profile ?`${BaseUrl}/images/${user.profile}` :'/default-profile.png'}
                            alt="Profile"
                            className="profile-icon"
                            
                        />
                        <span className="yusername">{user.FullName}</span>
                        

                        <button
                            className="ynav-button"
                            style={{ marginLeft: "750px", marginBottom: "20px" }}
                            onClick={handleLogout}
                        >
                            LogOut
                        </button>
                    </div>
                </div>
            </nav>

         <All/>
        </>
    );
};

export default MyHome;

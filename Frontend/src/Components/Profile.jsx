// // import React, { useState } from 'react';
// // import './Profile.css';
// // import { BaseUrl, post } from '../services/Endpoint';
// // import toast from 'react-hot-toast';
// // import { useNavigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // const Profile = () => {
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const navigate=useNavigate()
// //   const toggleDropdown = () => {
// //     setDropdownOpen(!dropdownOpen);
// //   };

// //   const user = useSelector((state)=> state.auth.user)
// // console.log('user',user)
// //   const handleLogout = async() => {
// //     // Handle logout functionality here
// //     try {
// //       const request= await post("/auth/logout")
// //       const response= request.data
// //        if (request.status==200) {
// //          navigate('/login')
        
// //          toast.success(response.message)
// //        }
// //     } catch (error) {
// //       console.log(error)
// //     }
// //   };

// //   return (
// //     <div className="profile-container">
// //       <nav className="navbar">
// //         <div className="navbar-content">
// //           <div className="navbar-title">RitsVerse</div>
// //           <div className="user-info" onClick={toggleDropdown}>
// //             <img
// //               src={`${BaseUrl}/images/${user.profile}`}
// //               alt="Profile Icon"
// //               className="profile-icon"
// //             />
// //             <span className="username">UserName</span>
// //             <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
// //               <ul>
// //                 <li><a href="#">My Image Posts</a></li>
// //                 <li><a href="#">My Videos</a></li>
// //                 <li><a href="#">Settings</a></li>
// //                 <li onClick={handleLogout}><a href="#">Log Out</a></li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //       <div className="content">
// //         {/* Profile content goes here */}
// //         <h1>User Profile</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;




// // import React, { useEffect, useState } from 'react';
// // import './Profile.css';
// // import { BaseUrl, post } from '../services/Endpoint';
// // import toast from 'react-hot-toast';
// // import { useNavigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';

// // const Profile = () => {
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const navigate = useNavigate();
// //   const toggleDropdown = () => {
// //     setDropdownOpen(!dropdownOpen);
// //   };

// //   const user = useSelector((state) => state.auth.user);
// //   console.log('user', user);




// //   // for protection
// //   useEffect(()=>{
// //     if(!user){
// //       navigate('/')
// //     }
// //   })

// //   const handleLogout = async () => {
// //     try {
// //       const request = await post("/auth/logout");
// //       const response = request.data;
// //       if (request.status === 200) {
// //         navigate('/login');
// //         toast.success(response.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <div className="profile-container">
// //       <nav className="navbar">
// //         <div className="navbar-content">
// //           <div className="navbar-title">RitsVerse</div>
// //           <div className="user-info" onClick={toggleDropdown}>
// //             <img
// //               src={`${BaseUrl}/images/${user.profile}`} // Profile image
// //               alt="Profile Icon"
// //               className="profile-icon"
// //             />
// //             <span className="username">{user.FullName}</span> {/* Display user's full name */}
// //             <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
// //               <ul>
// //                 <li><a href="#">My Image Posts</a></li>
// //                 <li><a href="#">My Videos</a></li>
// //                 <li><a href="#">Settings</a></li>
// //                 <li onClick={handleLogout}><a href="#">Log Out</a></li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //       <div className="content">
// //         <h1>User Profile</h1>
// //         <div className="profile-details">
// //           <img
// //             src={`${BaseUrl}/images/${user.profile}`} // Profile image
// //             alt="Profile"
// //             className="profile-picture" // Class for the profile picture styling
// //           />
// //           <h2>{user.FullName}</h2>
// //           <p>Email: {user.email}</p> {/* Display user's email */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;






// import React, { useEffect, useState } from 'react';
// import './Profile.css';
// import { BaseUrl, post } from '../services/Endpoint';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Profile = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const user = useSelector((state) => state.auth.user);
//   console.log('user', user);

//   // For protection
//   useEffect(() => {
//     if (!user) {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   const handleLogout = async () => {
//     try {
//       const request = await post("/auth/logout");
//       const response = request.data;
//       if (request.status === 200) {
//         navigate('/login');
//         toast.success(response.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <nav className="navbar">
//         <div className="navbar-content">
//           <div className="navbar-title">RitsVerse</div>
//           <div className="user-info" onClick={toggleDropdown}>
//             <img
//               src={`${BaseUrl}/images/${user.profile}`} // Profile image
//               alt="Profile Icon"
//               className="profile-icon"
//             />
//             <span className="username">{user.FullName}</span> {/* Display user's full name */}
//             <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
//               <ul>
//                 <li><a href="#">My Image Posts</a></li>
//                 <li><a href="#">My Videos</a></li>
//                 <li><a href="#">Settings</a></li>
//                 <li onClick={handleLogout}><a href="#">Log Out</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="content">
//         <h1>User Profile</h1>
//         <div className="profile-details">
//           <img
//             src={`${BaseUrl}/images/${user.profile}`} // Profile image
//             alt="Profile"
//             className="profile-picture" // Class for the profile picture styling
//           />
//           <h2>{user.FullName}</h2>
//           <p>Email: {user.email}</p> {/* Display user's email */}
//         </div>
//         <div className="profile-actions">
//           <button className="nav-button">My Image Posts</button>
//           <button className="nav-button">My Videos</button>
//           <button className="nav-button" onClick={handleLogout}>Log Out</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate , Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BaseUrl, post } from '../services/Endpoint';
import toast from 'react-hot-toast';
import Chatbot from './Chatbot';

const Profile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      const request = await post("/auth/logout");
      const response = request.data;
      if (request.status === 200) {
        navigate('/login');
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-container">
      <div className="heading">
      <h1>Your Profile</h1>
      </div>
          
      <nav className="navbar">

        <div className="navbar-content">
      
          <div className="navbar-title">RitsVerse</div>
          <div className="user-info" onClick={toggleDropdown}>
            <img
              src={`${BaseUrl}/images/${user.profile}`}
              alt="Profile"
              className="profile-icon"
            />
            <span className="username">{user.FullName}</span>
     
            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#">My Image Posts</a></li>
                <li><a href="#">My Videos</a></li>
                <li><a href="#">Settings</a></li>
                <li onClick={handleLogout}><a href="#">Log Out</a></li>
              </ul>
            </div>
            <button className="nav-button" style={{marginLeft:"750px" , marginBottom:"20px"}} onClick={handleLogout}>Log Out</button>
          </div>
          
        </div>
      </nav>
      <div className="content">
     
        <div className="profile-details">
          <img
            src={`${BaseUrl}/images/${user.profile}`}
            alt="Profile"
            className="profile-picture"
          />
          <h2>{user.FullName}</h2>
          <p>Email: {user.email}</p>
          <div className="profile-actions">
          <Link to = '/post'> <button className="nav-button">My Posts</button></Link> 
            <button className="nav-button">My Videos</button>
          <Link to ='/addpost'>  <button className="nav-button">Add Post</button></Link>
          </div>



        </div>
      </div>

      <Chatbot/>
    </div>
  );
};

export default Profile;

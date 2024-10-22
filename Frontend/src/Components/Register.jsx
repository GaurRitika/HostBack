// import React , {useState} from 'react';
// import './Register.css';
// import toast from 'react-hot-toast';
// import { post } from '../services/Endpoint';
// import { useNavigate } from 'react-router-dom';





// const RegisterPage = () => {

//   const navigate=useNavigate()
//   const [value , setValue] = useState({
//     email:"",
//     FullName:"",
//     password:""
//   })

// const handleChange = (e)=>{
//   setValue({
//     ...value ,
//     [e.target.name]: e.target.value
//   })
// }

// const handleSubmit =async(e)=>{
//   e.preventDefault();
//   try{

// const response = await post('/auth/Register', value);
// const data = response.data;
// console.log(data);
// if (response.status==200) {
//   navigate('/login')
//   toast.success(data.message)
// }

//   }catch(error){
// console.log(error)
// if (error.response) {
//   // Handle known backend errors
//   toast.error(error.response.data.message || 'Registration failed');
// } else {
//   // Handle unknown errors
//   toast.error('An unexpected error occurred. Please try again later.');
// }
//   }
// }




//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input type="text"    name="FullName" 
//             onChange = {handleChange} required 
//          value = {value.FullName}/>
//             <label>Full Name</label>
//           </div>
//           <div className="input-group">
//             <input type="email"   name="email"   onChange = {handleChange} required 
//             value = {value.email}
//            />
//             <label>Email</label>
//           </div>
//           <div className="input-group">
//             <input type="password"     name="password"     onChange = {handleChange} required 
//              value = {value.password} />
//             <label>Password</label>
//           </div>
//           {/* <div className="input-group">
//             <input type="password" required />
//             <label>Confirm Password</label>
//           </div> */}
//           <button type="submit" className="register-btn">Register</button>
//           <p className="login-link">
//             Already have an account? <a href="#">Sign in</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



import React, { useState } from 'react';
import './Register.css';
import toast from 'react-hot-toast';
import { post } from '../services/Endpoint'; // Ensure this is your API call function
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    FullName: "",
    password: "",
    profile: null // Initialize profile state for file input
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;

    // Handle file input separately
    if (name === 'profile') {
      setValue({
        ...value,
        profile: e.target.files[0] // Store the file object
      });
    } else {
      setValue({
        ...value,
        [name]: inputValue
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData(); // Create a new FormData object
      formData.append('FullName', value.FullName); // Append FullName
      formData.append('email', value.email);       // Append email
      formData.append('password', value.password); // Append password

      // Append profile file if it exists
      if (value.profile) {
        formData.append('profile', value.profile); // Append the file
      }

      const response = await post('/auth/Register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type
        },
      });

      const data = response.data; // Get response data
      if (response.status === 200) {
        navigate('/login'); // Redirect to login on success
        toast.success(data.message); // Show success message
      }
    } catch (error) {
      // Handle errors and show appropriate messages
      if (error.response) {
        toast.error(error.response.data.message || 'Registration failed');
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="FullName" 
              onChange={handleChange} 
              required 
              value={value.FullName} 
            />
            <label>Full Name</label>
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              onChange={handleChange} 
              required 
              value={value.email} 
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input 
              type="password" 
              name="password" 
              onChange={handleChange} 
              required 
              value={value.password} 
            />
            <label>Password</label>
          </div>
          <div className="input-group">
            <input 
              type="file" 
              name="profile" 
              onChange={handleChange} // Handle file input
            />
            <label>Profile Picture</label>
          </div>
          <button type="submit" className="register-btn">Register</button>
          <p className="login-link">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;


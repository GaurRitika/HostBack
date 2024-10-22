// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import React , {useState}  from 'react';
import './Login.css';
import toast from 'react-hot-toast';
import { post } from '../services/Endpoint';
  import {   useNavigate} from 'react-router-dom';
  import { useDispatch } from 'react-redux';
import { SetUser } from '../redux/AuthSlice';
const Login = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [value , setValue] = useState({
    email:"" , 
    password:""
  })
  const handleChange = (e)=>{
    setValue({
      ...value ,
      [e.target.name]:e.target.value
    })
  }
 
  const handleSubmit =async(e)=>{
    try{
  e.preventDefault();
  const response = await post('/auth/login', value);
  const data = response.data;
  console.log(data);
  if (response.status==200) {
    dispatch(SetUser(data.user));
navigate('/Myhome')
    toast.success(data.message)
  
   }
  
    }catch(error){
  console.log(error)
  alert('User is not registered , please register first')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" required 
             name='email'
             onChange={handleChange} 
             value={value.email}/>
            <label>Email </label>
          </div>
          <div className="input-group">
            <input type="password" required
             onChange={handleChange}
             value={value.password}
             name='password' />
            <label>Password</label>
          </div>
 <button type="submit" className="login-btn">Next</button>
          <p className="register-link">
            Don't have an account? <a href="/register">Create account</a>
          </p>
        </form>
      </div>
      <hr></hr>
    </div>
  );
};

export default Login;

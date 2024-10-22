import React from "react";
import {Toaster} from 'react-hot-toast'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from './Components/Register'
import Profile from "./Components/Profile";
import Post from "./UserSection/Post";
import MyHome from "./UserSection/MyHome";
import AddPost from "./UserSection/AddPost";
import Search from "./UserSection/Search";
import PostDesc from "./UserSection/PostDesc"
// import MyProfile from "./UserSection/MyProfile"
function App() {
  return (
   <>
      <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/login' element = {<Login/>}/>
        <Route path= '/register' element={<Register/>}/> 
        <Route path= '/profile' element={<Profile/>}/> 
        <Route path= '/particularpost/:id' element = {<PostDesc/>}/>

      <Route path = '/Myhome' element = {<MyHome/>}/>
      <Route path = '/post' element = {<Post/>}/>
  <Route path = '/addpost' element = {<AddPost/>}/>
  <Route path = '/search' element = {<Search/>}/>
  {/* <Route path = '/myProfile' element= {<MyProfile/>}/> */}

      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;

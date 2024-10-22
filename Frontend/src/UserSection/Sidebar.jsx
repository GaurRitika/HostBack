import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <ul>
       <Link to = '/post'><li>All Posts</li></Link>
       <Link to = '/search'><li>Search</li></Link>
       <Link to = '/addpost'><li>Add Post</li></Link>
       <Link to='/profile'><li>My Profile</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;

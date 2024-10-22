import { useState } from "react";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import Post from "./Post";
import './All.css';

// import Search from "./Search"; // For "Search Page"
// import AddPost from "./AddPost"; // For "Add Post Page"
import Chatbot from "../Components/Chatbot";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      {/* Menu Icon */}
      <MenuIcon toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Posts */}
      <Post isSidebarOpen={isSidebarOpen} />

      <Chatbot/>
      
    </div>
  );
};

export default App;

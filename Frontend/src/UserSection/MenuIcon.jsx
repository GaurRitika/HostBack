import React from 'react';
import { FaBars } from "react-icons/fa";

const MenuIcon = ({ toggleSidebar }) => {
  return (
    <div className="menu-icon" onClick={toggleSidebar}>
      <FaBars />
    </div>
  );
};

export default MenuIcon;

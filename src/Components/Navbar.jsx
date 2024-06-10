// src/Navbar.jsx
import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="relative flex items-center bg-white p-2 text-grey-700 border">
      <div className="flex items-center">
        <img src="src/assets/Images/WEemploy.png" className="h-8 w-12 ml-10" alt="Logo" />
      </div>
      
      {/* Movable Search Bar */}
      <div className="absolute right-1/2 transform translate-x-1/2 sm:relative sm:right-auto sm:translate-x-0 flex items-center text-gray-700 mx-auto">
        <input
        
          type="text"
          placeholder="Search..."
          className="w-64 sm:w-80 md:w-96 p-2 border search-bar  text-gray-700 bg-white"
        />
      </div>
      
      <div className="flex-grow"></div> {/* Ensures remaining space on the right */}
      
      {/* Notification Button */}
      <div className="flex items-center justify-end space-x-6">
        <button className="relative flex items-center p-2 hover:text-gray-400 focus:outline-none">
          <img className="flex items-center h-5 notification" src="src/assets/Images/notification.png" alt="Notification" />
        </button>

        {/* Profile Section */}
        <div className="flex items-center">
          <img src="src/assets/Images/profile.png" className="h-10 w-10 rounded-sm mr-3 profile-image" alt="Profile" />
          <span className="profile-name text-base font-bold">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// src/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative flex items-center bg-white p-2 text-gray-700 border">
      <div className="flex items-center">
        <img
          src="src/assets/Images/WEemploy.png"
          className="h-8 w-12 ml-4 sm:ml-10"
          alt="Logo"
        />
      </div>
      {/* Movable Search Bar */}
      <div className="relative flex items-center mx-auto ml-4 sm:ml-[59%]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 text-gray-500"
        >
          <path
            d="M9.58366 17.4998C13.9559 17.4998 17.5003 13.9554 17.5003 9.58317C17.5003 5.21092 13.9559 1.6665 9.58366 1.6665C5.2114 1.6665 1.66699 5.21092 1.66699 9.58317C1.66699 13.9554 5.2114 17.4998 9.58366 17.4998Z"
            stroke="#6F737B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3337 18.3332L16.667 16.6665"
            stroke="#6F737B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          type="text"
          placeholder="Search..."
          className="w-40 sm:w-64 md:w-80 lg:w-96 p-2 pl-10 border search-bar bg-white text-gray-700"
        />
      </div>
      <div className="flex-grow"></div>{" "}
      {/* Ensures remaining space on the right */}
      {/* Notification Button */}
      <div className="flex items-center justify-end space-x-4 sm:space-x-6">
        <button className="relative flex items-center p-2 hover:text-gray-400 focus:outline-none">
          <img
            className="flex items-center h-5 notification"
            src="src/assets/Images/notification.png"
            alt="Notification"
          />
        </button>

        {/* Profile Section */}
        <div className="flex items-center">
          <img
            src="src/assets/Images/profile.png"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-2 sm:mr-3 profile-image"
            alt="Profile"
          />
          <span className="profile-name text-sm sm:text-base font-semibold hidden sm:block">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

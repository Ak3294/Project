// Sidebar.js

import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-56 flex flex-col justify-between border">
      {/* Sidebar content */}
      <div className="py-4">
        {/* Sidebar items */}
        <div className="flex items-center text-black py-6 px-4">
          <img src="src\assets\Images\note-2.png" alt="" />
          <span className="text-sm ml-4">Questionnaire</span>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img src="src\assets\Images\book.png" alt="" />
          <span className="text-sm ml-4">Learn</span>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img src="src\assets\Images\economic-investment.png" alt="" />
          <span className="text-sm ml-4">Earn</span>
        </div>

        <div className="flex items-center text-black py-6 px-4">
          <span className="text-sm ml-4">More</span>
        </div>

        <div className="flex items-center text-black py-6 px-4">
          <img className ="h-3 w-3" src="src\assets\Images\user.png" alt="" />
          <span className="text-sm ml-4">Profile</span>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img src="src\assets\Images\home.png" alt="" />
          <span className="text-sm ml-4">My courses</span>
        </div>
        <div className="flex items-center text-black py-2 px-4">
          <img src="src\assets\Images\bookmark.png" alt="" />
          <span className="text-sm ml-4">
            My service <br /> offering
          </span>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img src="src\assets\Images\briefcase.png" alt="" />
          <span className="text-sm ml-4">My work</span>
        </div>

        <div className="flex items-center text-black py-6 px-4">
          <img src="src\assets\Images\settings.png" alt="" />
          <span className="text-sm ml-4">Setting</span>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img src="src\assets\Images\circum_logout.png" alt="" />
          <span className="text-sm ml-4">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// Sidebar.js

import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-56 flex flex-col justify-between border">
      {/* Sidebar content */}
      <div className="py-2">
        {/* Sidebar items */}
        <div className="flex items-center text-black py-6 px-4">
          <img
            className="h-6 w-6 mr-2"
            src="src\assets\Images\note-2.png"
            alt=""
          />
          <a href="/questionnaire" className="text-sm ml-4">
            Questionnaire
          </a>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img
            className="h-6 w-6 mr-2"
            src="src\assets\Images\book.png"
            alt=""
          />
          <a href="/learn" className="text-sm ml-4">
            Learn
          </a>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img
            className="h-6 w-6 mr-2"
            src="src\assets\Images\economic-investment.png"
            alt=""
          />
          <a href="/earn" className="text-sm ml-4">
            Earn
          </a>
        </div>

        <div className="flex items-center text-black py-6 px-4">
          <span className="text-sm ml-4">More</span>
        </div>

        <div className="flex items-center text-black py-6 px-4">
          <img className="h-6 w-6" src="src\assets\Images\user.png" alt="" />
          <a href="/profile" className="text-sm ml-4">
            Profile
          </a>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img className="h-6 w-6" src="src\assets\Images\home.png" alt="" />
          <a href="/mycourses" className="text-sm ml-4">
            My courses
          </a>
        </div>
        <div className="flex items-center text-black py-2 px-4">
          <img
            className="h-6 w-6"
            src="src\assets\Images\bookmark.png"
            alt=""
          />
          <a href="myservice" className="text-sm ml-4">
            My service <br /> offering
          </a>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img
            className="h-6 w-6"
            src="src\assets\Images\briefcase.png"
            alt=""
          />
          <a href="mywork" className="text-sm ml-4">
            My work
          </a>
        </div>

        <div className="flex items-center text-black py-6 px-4">
          <img
            className="h-6 w-6"
            src="src\assets\Images\settings.png"
            alt=""
          />
          <a href="/settings" className="text-sm ml-4">
            Setting
          </a>
        </div>
        <div className="flex items-center text-black py-6 px-4">
          <img
            className="h-6 w-6"
            src="src\assets\Images\circum_logout.png"
            alt=""
          />
          <span className="text-sm ml-4">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

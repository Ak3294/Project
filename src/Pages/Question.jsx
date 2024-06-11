import React, { useState } from "react";

const Question = () => {
  const [academicLevel, setAcademicLevel] = useState(0);
  const [workTimeFrom, setWorkTimeFrom] = useState("9:00");
  const [workTimeTo, setWorkTimeTo] = useState("18:00");

  const [value, setValue] = useState(20); // Initial value

  const handleTimeChange = (timeType, value) => {
    switch (timeType) {
      case "workFrom":
        setWorkTimeFrom(value);
        break;
      case "workTo":
        setWorkTimeTo(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted!");
    console.log("Academic Level:", academicLevel);
    console.log("Work Time:", workTimeFrom, "-", workTimeTo);
  };

  return (
    <div className="flex ml-[30px]">
    <div className="max-w-2xl mx-auto px-4 py-8 ml-auto mt-2 inline-auto">
      <h1 className="text-4xl font-bold  mb-2 ">
        Welcome to Your Service Offering Recommendation Questionnaire!
      </h1>
      <p className="text-sm  text-[6F737B] mb-8">
        Please complete this survey so we can evaluate your skills and interests
        to discover what services you should offer.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {/* Academic Education Level */}
        <div className="bg-white rounded-lg font-sans flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-bold text-[6F737B]">
              Academic education level
            </h2>
            <p className="text-[#6F737B] font-sans w-[350px]">
              Level of formal education attained
            </p>
          </div>

          <div className="flex-grow text-center ">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm ml-24">
            Very Low{" "}
            <span
              className="inline-block ml-1  w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>
        <div className="bg-white rounded-lg flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold font-sans ">
              Artistic and creative ability
            </h2>
            <p className="text-gray-500 w-[350px]">
              Capacity to produce original and imaginative work
            </p>
          </div>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm">
            Very Low{" "}
            <span
              className="inline-block ml-1 w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>
        <div className="bg-white rounded-lg  flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold">Communication skills</h2>
            <p className="text-gray-500 w-[350px]">
              Proficiency in conveying ideas effectively through various
              channels
            </p>
          </div>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm">
            Very Low{" "}
            <span
              className="inline-block ml-1 w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>
        <div className="bg-white rounded-lg flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold">Marketing skills</h2>
            <p className="text-gray-500 w-[350px]">
              Competency in promoting products/services and understanding
              consumer behavior
            </p>
          </div>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm">
            Very Low{" "}
            <span
              className="inline-block ml-1 w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>
        <div className="bg-white rounded-lg flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold">Musical ability</h2>
            <p className="text-gray-500 w-[350px] ">
              Aptitude in performing or composing music
            </p>
          </div>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm">
            Very Low{" "}
            <span
              className="inline-block ml-1 w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>
        <div className="bg-white rounded-lg flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold">Quantitative ability</h2>
            <p className="text-gray-500 w-[350px]">
              Aptitude in performing or composing music
            </p>
          </div>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm">
            Very Low{" "}
            <span
              className="inline-block ml-1 w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>
        <div className="bg-white rounded-lg flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold">Administrative skills</h2>
            <p className="text-gray-500">
              Ability to organize and manage tasks efficiently
            </p>
          </div>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm">
            Very Low{" "}
            <span
              className="inline-block ml-1 w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>

        {/* Available Time for Work */}
        <div className="bg-white rounded-lg flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold">Visual design skills</h2>
            <p className="text-gray-500 w-[350px]">
              Capability to create visually appealing designs
            </p>
          </div>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <span className="text-gray-500 text-sm">
            Very Low{" "}
            <span
              className="inline-block ml-1 w-4 h-4 text-center text-xs font-semibold rounded-full cursor-pointer"
              title="Explanation tooltip"
            >
              ?
            </span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Specify the available time for work
            </h2>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">from</span>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="9:00"
              >
                <option value="9:00">9:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
              </select>
            </div>
            <span className="text-gray-500">to</span>
            <div className="flex items-center space-x-2">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="18:00"
              >
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
          </div>
        </div>

        {/* Train Time */}
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Specify the available time to train
            </h2>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">from</span>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="9:00"
              >
                <option value="9:00">9:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
              </select>
            </div>
            <span className="text-gray-500">to</span>
            <div className="flex items-center space-x-2">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="18:00"
              >
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="space-x-4 text-center mt-10">
        {/* <!-- Cancel Button --> */}
        <button class="px-10 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
          Cancel
        </button>
        {/* <!-- Save&Submit Button --> */}
        <button class="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
          Save&Submit
        </button>
      </div>

      <img src="src\assets\Images\group.png" alt="" className="ml-4 max-w-xs" />
    </div>
    </div>
  );
};

export default Question;

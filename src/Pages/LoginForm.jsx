import React from "react";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center  min-w-screen min-h-screen bg-white">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-[6F737B] text-sm  mb-2"
              htmlFor="email"
            >
              Email or mobile number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[6F737B] leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Email or mobile"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[6F737B] text-sm  mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[6F737B] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-black text-white ml-20 font-bold py-2 px-4 w-[115px] rounded-xl focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
          <div className="my-4 text-center">or</div>
          <div className="flex justify-center mb-4">
            <button
              className="bg-white text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mx-2"
              type="button"
            >
              <img src="src\assets\Images\Google.png" alt="" />
            </button>
            <button
              className="bg-white text-black  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mx-2"
              type="button"
            >
              <img src="src\assets\Images\Facebook.png" alt="" />
            </button>
            <button
              className="bg-white text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mx-2"
              type="button"
            >
              <img src="src\assets\Images\Linkedin.png" alt="" />
            </button>
          </div>
          <div className="text-center">
            <p>
              Don't have an account yet?{" "}
              <a href="#" className="text-black">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

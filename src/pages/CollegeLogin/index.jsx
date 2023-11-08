import React from "react";

const CollegeLogin = () => {
  return (
    <div className="h-[calc(100vh-64px)]  flex justify-center items-center">
      <div className="mx-auto bg-gray-400 p-4 shadow-md shadow-slate-600 rounded-md">
        <h1 className="text-center text-lg font-bold m-2">Sign Up</h1>
        <form className="w-auto">
          <div className="flex flex-col justify-between space-y-2">
            <input
              type="text"
              className="text-md font-semibold rounded-md h-8 px-2 w-96 focus:outline-none"
              placeholder="Email address"
            />
            <input
              type="text"
              className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
              placeholder="Password"
            />
            <button
              onClick={() => {}}
              type="button"
              className="bg-gray-300 h-8 rounded-md"
              children="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollegeLogin;

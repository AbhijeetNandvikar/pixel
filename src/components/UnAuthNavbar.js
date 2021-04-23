import React, { useContext } from "react";
import { globalStore } from "./UserContext";

const UnAuthNavbar = () => {
  const { auth } = useContext(globalStore);
  return (
    <div className="h-28 border-gray-100 border-2 flex justify-between items-center px-8">
      <div className="text-3xl font-bold text-indigo-600">Blink</div>
      <div className="flex ">
        <button className="focus:outline-none text-white text-lg py-2 px-8 rounded-md border-2 bg-indigo-600">
          Login
        </button>
        <button className="focus:outline-none text-indigo-600 text-lg py-2 px-8 rounded-md border-2 border-indigo-600 ml-8">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default UnAuthNavbar;

import React, { useContext } from "react";
import { globalStore } from "./UserContext";

const Navbar = () => {
  const { auth } = useContext(globalStore);
  return (
    <div className="h-28 border-gray-100 border-2 flex justify-between items-center px-8">
      <div className="text-3xl font-bold text-indigo-600">Blink</div>
      <div className="flex ">
        <button className="focus:outline-none text-black text-lg py-2 px-8  rounded-md border border-black">
          Logout
        </button>
        <img
          className="w-14 h-14 object-cover rounded-full ml-8"
          src={auth ? auth.photoUrl : ""}
          alt="pic"
        />
      </div>
    </div>
  );
};

export default Navbar;

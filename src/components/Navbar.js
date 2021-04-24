import React, { useContext } from "react";
import { logoutWrapper } from "../firebase";
import { globalStore } from "./UserContext";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const { auth } = useContext(globalStore);
  const history = useHistory();
  return (
    <div className="h-28 border-gray-100 border-2 flex justify-between items-center px-8">
      <div
        className="text-3xl font-bold text-indigo-600 cursor-pointer"
        onClick={() => {
          if (auth !== null) {
            history.push("/feed");
          }
        }}
      >
        PIXEL
      </div>
      <div className="flex ">
        <button
          className="focus:outline-none text-black text py-2 px-4  rounded-md border border-black"
          onClick={() => {
            logoutWrapper();
            history.push("/login");
          }}
        >
          Logout
        </button>
        <Link to={`/profile/${auth?.uid}`}>
          <img
            className="w-14 h-14 object-cover rounded-full ml-8"
            src={auth ? auth.photoUrl : ""}
            alt="pic"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Navbar from "./Navbar";
import UnAuthNavbar from "./UnAuthNavbar";

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <UnAuthNavbar />
    </div>
  );
};

export default MainApp;

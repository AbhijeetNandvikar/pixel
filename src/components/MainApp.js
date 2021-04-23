import React, { useContext } from "react";
import Navbar from "./Navbar";
import UnAuthNavbar from "./UnAuthNavbar";
import { checkFirebaseAuth } from "../firebase";
import { globalStore } from "./UserContext";
import { Route, Switch, useLocation } from "react-router";
import ProfilePage from "./ProfilePage";
import Feed from "./Feed";
const MainApp = () => {
  const { auth } = useContext(globalStore);
  return (
    <div>
      {auth !== null ? <Navbar /> : <UnAuthNavbar />}
      <Switch>
        <Route exact path="/profile/:id" component={ProfilePage} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </div>
  );
};

export default MainApp;

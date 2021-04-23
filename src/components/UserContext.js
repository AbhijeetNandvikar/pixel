import React from "react";
import { firebaseConfig, initFirebase } from "../firebase";
import { useHistory } from "react-router-dom";
export const globalStore = React.createContext(null);

export const UserContext = (props) => {
  const [auth, setAuth] = React.useState(null);
  let history = useHistory();
  console.log(history);
  const redirect = (location) => {
    history.push(location);
  };
  const reject = () => {
    setAuth(null);
    redirect("login");
  };
  const resolve = (data) => {
    setAuth({
      name: data.displayName,
      email: data.email,
      photoUrl: data.photoURL,
      emailVerified: data.emailVerified,
      uid: data.uid,
    });
    redirect("/feed");
  };
  console.log(auth);
  React.useEffect(() => {
    initFirebase(firebaseConfig, resolve, reject);
  }, []);

  return (
    <globalStore.Provider value={{ auth, setAuth }}>
      {props.children}
    </globalStore.Provider>
  );
};

import React from "react";
import { firebaseConfig, initFirebase } from "../firebase";
export const globalStore = React.createContext(null);

export const UserContext = (props) => {
  const [auth, setAuth] = React.useState(null);
  const reject = () => {
    setAuth({});
  };
  const resolve = (data) => {
    setAuth({
      name: data.displayName,
      email: data.email,
      photoUrl: data.photoURL,
      emailVerified: data.emailVerified,
      uid: data.uid,
    });
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

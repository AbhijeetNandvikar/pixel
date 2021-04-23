import firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDwAaR-bXc1KCknSlTnKomRc2hBxfZKj98",
  authDomain: "pixel-ac2d6.firebaseapp.com",
  projectId: "pixel-ac2d6",
  storageBucket: "pixel-ac2d6.appspot.com",
  messagingSenderId: "358503087465",
  appId: "1:358503087465:web:21b0dd17506f3a12cf91f8",
  measurementId: "G-HR2XMEQMBL",
};

export const initFirebase = (firebaseConfig, resolve, reject) => {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("user signed in");
      resolve(firebase.auth().currentUser);
    } else {
      // No user is signed in
      reject();
      console.log("user logged out");
    }
  });
};

export const signUpWrapper = (email, pass, resolve, reject) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then((res) => {
      console.log(res);
      // store.dispatch(userLogin(firebase.auth().currentUser));
      // if (typeof resolve === "function") resolve();
    })
    .catch((res) => {
      console.log(res);
      // if (typeof reject === "function") reject(res.code);
    });
};

export const loginWrapper = (email, pass, resolve, reject) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then((res) => {
      console.log(res);
      // store.dispatch(userLogin(firebase.auth().currentUser));
      // if (typeof resolve === "function") resolve();
    })
    .catch((res) => {
      console.log(res);
      // if (typeof reject === "function") reject(res.code);
    });
};

export const logoutWrapper = () => {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      console.log(res);
      // store.dispatch(userLogout(res.user));
    })
    .catch((res) => {
      console.log(res);
    });
  // window.location.href = "http://localhost:3000";
};

export const googlesigninwrapper = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      // store.dispatch(userLogin(user));
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      console.log(error);
    });
};
export const firebaseStorageRef = () => firebase.storage().ref();

export const fireStoreRef = () => firebase.firestore();

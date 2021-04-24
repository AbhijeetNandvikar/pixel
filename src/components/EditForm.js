import React from "react";
import { fireStoreRef } from "../firebase";

const EditForm = (props) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [image, setImage] = React.useState("");
  const db = fireStoreRef();
  React.useEffect(() => {
    console.log(props.auth);
    setEmail(props.auth.email);
    setName(props.auth.name);
    setBio(props.auth.bio);
    setImage(props.auth.photoUrl);
  }, []);
  return (
    <div className="fixed top-0 w-screen h-screen bg-gray-700 bg-opacity-25 flex items-center justify-center">
      <div className=" absolute lg:w-6/12 mx-4 bg-white opacity-100 px-4 py-4 rounded-md flex flex-col max-h-screen overflow-scroll">
        <div>
          <img
            className="w-60 h-60 rounded-full object-cover shadow-md mx-auto"
            src={props.auth?.photoUrl}
            alt="profile"
          />
          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Full Name
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                <input
                  type="text"
                  class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Email
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                <input
                  type="email"
                  class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="johnsmith@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Description
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                <textarea
                  class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Enter Description"
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="bg-indigo-700 rounded-lg px-4 py-4 text-white font-bold my-4 text-center"
          onClick={(e) => {
            console.log(props.auth);
            db.collection("users")
              .doc(props.auth.uid)
              .update({
                ...props.auth,
                name: name,
                email: email,
                bio: bio,
              });
            props.setAuth({
              ...props.auth,
              name: name,
              email: email,
              bio: bio,
            });
          }}
        >
          Save
        </button>
        <button
          className="bg-indigo-700 rounded-lg px-4 py-4 text-white font-bold my-4 text-center"
          onClick={() => {
            props.close();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditForm;

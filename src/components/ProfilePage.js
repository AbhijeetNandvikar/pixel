import React, { useContext } from "react";
import { fireStoreRef } from "../firebase";
import { globalStore } from "./UserContext";
import EditForm from "./EditForm";
import UploadForm from "./UploadForm";
import { useHistory } from "react-router";

const ProfilePage = () => {
  const [editForm, setEditForm] = React.useState(false);
  const [uploadForm, setUploadForm] = React.useState(false);
  const [uploadedImages, setUploadedImages] = React.useState([]);
  const { auth, setAuth } = React.useContext(globalStore);
  const history = useHistory();

  React.useEffect(() => {
    const db = fireStoreRef();

    if (auth !== null) {
      db.collection("users")
        .doc(auth.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("doc exits");
          } else {
            db.collection("users").doc(auth.uid).set(auth);
          }
        });
      db.collection("users")
        .doc(auth.uid)
        .get()
        .then((res) => {
          console.log(res.data());
          setUploadedImages(res.data().images);
        });
    }
  }, [auth]);

  const renderImages = (images) => {
    return images.map((image) => {
      return (
        <div className="">
          <img className=" object-cover " src={image} />
        </div>
      );
    });
  };
  return (
    <div className="">
      {editForm ? (
        <EditForm auth={auth} close={() => setEditForm(!editForm)} />
      ) : (
        <></>
      )}
      {uploadForm ? (
        <UploadForm
          auth={auth}
          setAuth={setAuth}
          close={() => setUploadForm(!uploadForm)}
        />
      ) : (
        <></>
      )}
      <div className="flex justify-start  items-start mt-8 mb-16 lg:w-6/12 mx-auto">
        <img
          className="w-60 h-60 rounded-full object-cover shadow-md ml-8"
          src={auth?.photoUrl}
          alt="profile"
        />
        <div className="flex flex-col items-start justify-start w-96 ml-16">
          <div className="text-2xl font-bold mb-4">{auth?.name}</div>
          <div className="text-base text-gray-700 mb-2">
            Hi!! I am a frontend developer, and I love to create awesome
            websites and web Apps.
          </div>
          <div className="text-base text-gray-700 mb-2">{auth?.email}</div>
          <div className="w-80 flex mt-3">
            <button
              className="px-3 py-2 border-indigo-700 border-2 text-indigo-700 rounded-md"
              onClick={() => {
                setEditForm(!editForm);
              }}
            >
              Edit Profile
            </button>
            <button
              className="px-3 py-2  border-indigo-700 bg-indigo-700 border-2 text-white rounded-md ml-auto"
              onClick={() => {
                setUploadForm(!uploadForm);
              }}
            >
              Upload Image
            </button>
          </div>
          <button
            className="px-3 w-80 py-2 border-indigo-700 border-2 text-indigo-700 rounded-md w-100 mt-4"
            onClick={() => {
              history.push("/feed");
            }}
          >
            feed
          </button>
          <div className="w-80 flex mt-4">
            <span className="text-lg text-gray-700 font-bold ml-2">
              {uploadedImages.length} POSTS
            </span>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 place-items-center place-content-center	lg:gap-8 gap-3 px-4 lg:w-6/12 mx-auto">
        {renderImages(uploadedImages)}
      </div>
    </div>
  );
};

export default ProfilePage;

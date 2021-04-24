import React from "react";
import { firebaseStorageRef, fireStoreRef } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import demoImg from "../images/post.jpg";
const UploadForm = (props) => {
  const [staged, setStaged] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const [uploaded, setUploaded] = React.useState(false);
  const [description, setDescription] = React.useState("");

  const uploadImg = (img) => {
    console.log(img);
    const db = fireStoreRef();
    const storage = firebaseStorageRef();
    const uniqueId = uuidv4();
    const ref = storage.child(uniqueId);
    // const file = URL.createObjectURL(image);
    let reader = new FileReader();

    reader.readAsArrayBuffer(image);

    reader.onload = function () {
      const blob = new Blob([reader.result]);

      console.log(blob);
      var uploadTask = ref.put(blob);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            db.collection("images")
              .doc(uniqueId)
              .set({
                ...props.auth,
                downloadURL: downloadURL,
                description: description,
              })
              .then((res) => {
                db.collection("users")
                  .doc(props.auth.uid)
                  .get()
                  .then((doc) => {
                    let data = doc.data();
                    let arr = data.images;
                    arr.push({
                      location: uniqueId,
                      downloadURL: downloadURL,
                    });
                    db.collection("users")
                      .doc(props.auth.uid)
                      .update({
                        images: arr,
                      })
                      .then(() => {
                        props.setAuth({
                          ...data,
                          images: arr,
                        });
                      });
                  });
                setProgress(0);
                setUploaded(true);
                setImage(null);
                setStaged(false);
              });
          });
        }
      );
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  };
  return (
    <div className="fixed top-0 w-screen h-screen bg-gray-700 bg-opacity-25 flex items-center justify-center">
      <div className=" absolute lg:w-6/12 mx-4 bg-white opacity-100 px-4 py-4 rounded-md flex flex-col max-h-screen overflow-scroll">
        {/* <progress value={`${progress}`} className="rounded-md"></progress> */}
        {image === null ? (
          <></>
        ) : (
          <>
            <img
              src={URL.createObjectURL(image)}
              className="rounded-lg mt-8 object-cover w-100"
            />
            <button
              className="bg-white border-2 border-indigo-700 text-indigo-700 rounded-lg px-4 py-4 font-bold my-4 text-center"
              onClick={() => {
                setImage(null);
                setStaged(false);
              }}
            >
              Remove Image
            </button>
          </>
        )}

        {uploaded ? (
          <div className="text-lg font-bold text-indigo-700 mx-auto">
            Image Uploaded
          </div>
        ) : (
          <>
            <div class="flex mt-8">
              <div class="w-full mb-5">
                <label for="" class="text-lg font-semibold">
                  Description
                </label>
                <div class="flex mt-4">
                  <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                  <textarea
                    class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {!staged ? (
          <>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => {
                setStaged(true);
                setImage(e.target.files[0]);
                setUploaded(false);
              }}
              className="opacity-0 w-0 h-0"
            />
            <label
              htmlFor="file"
              id="file"
              className="bg-indigo-700 rounded-lg px-4 py-4 text-white font-bold my-4 text-center"
            >
              Add Image
            </label>
          </>
        ) : (
          <button
            className="bg-indigo-700 rounded-lg px-4 py-4 text-white font-bold my-4 text-center"
            onClick={() => {
              uploadImg(image);
            }}
          >
            Upload Image
          </button>
        )}
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

export default UploadForm;

import React from "react";
import { fireStoreRef, firebaseStorageRef } from "../firebase";

const ShowImage = (props) => {
  const [description, setDescription] = React.useState("");
  const [info, setInfo] = React.useState("");
  React.useEffect(() => {
    fireStoreRef()
      .collection("images")
      .doc(props.image.location)
      .get()
      .then((doc) => {
        setInfo(doc.data());
        setDescription(doc.data().description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="fixed top-0 w-screen h-screen bg-gray-700 bg-opacity-25 flex items-center justify-center">
      <div className=" absolute lg:w-6/12 mx-4 bg-white opacity-100 px-4 py-4 rounded-md flex flex-col max-h-screen overflow-scroll">
        <img
          src={props.image.downloadURL}
          className="rounded-lg mt-8 object-cover w-100"
        />
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
        <div className="w-full flex gap-4">
          <button
            class="bg-indigo-700 rounded-lg px-4 py-4 text-white font-bold my-4 text-center w-full"
            onClick={(e) => {
              // console.log(props.auth);
              // db.collection("users")
              //   .doc(props.auth.uid)
              //   .update({
              //     ...props.auth,
              //     name: name,
              //     email: email,
              //     bio: bio,
              //   });
              // props.setAuth({
              //   ...props.auth,
              //   name: name,
              //   email: email,
              //   bio: bio,
              // });
            }}
          >
            Save
          </button>
          <button
            class="bg-indigo-700 rounded-lg px-4 py-4 text-white font-bold my-4 text-center w-full"
            onClick={(e) => {
              var docRef = firebaseStorageRef().child(props.image.location);

              // Delete the file
              docRef
                .delete()
                .then(() => {
                  console.log("file deleted from firebase storage");
                  fireStoreRef()
                    .collection("images")
                    .doc(props.image.location)
                    .delete()
                    .then((res) => {
                      console.log(
                        "file deleted from firebase image collection"
                      );
                    })
                    .catch((err) => console.log(err));
                  let imagesArray = props.auth.images;
                  imagesArray = imagesArray.filter((image) => {
                    if (image.location === props.image.location) return false;
                    return true;
                  });
                  fireStoreRef()
                    .collection("users")
                    .doc(props.auth.uid)
                    .update({
                      ...props.auth,
                      images: imagesArray,
                    })
                    .then((res) => {
                      props.setAuth({
                        ...props.auth,
                        images: imagesArray,
                      });
                      props.close();
                    });
                })
                .catch((error) => {
                  // Uh-oh, an error occurred!
                });
            }}
          >
            Delete
          </button>
        </div>

        <button
          className="border-indigo-700 rounded-lg px-4 py-4 text-indigo-700 border-2 font-bold my-4 text-center"
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

export default ShowImage;

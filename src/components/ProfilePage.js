import React from "react";

const ProfilePage = () => {
  return (
    <div className="">
      <div className="flex justify-start  items-start mt-8 mb-16 lg:w-6/12 mx-auto">
        <img
          className="w-60 h-60 rounded-full object-cover shadow-md ml-8"
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        />
        <div className="flex flex-col items-start justify-start w-96 ml-16">
          <div className="text-2xl font-bold mb-4">Abhijeet Nandvikar</div>
          <div className="text-base text-gray-700 mb-2">
            Hi!! I am a frontend developer, and I love to create awesome
            websites and web Apps.
          </div>
          <div className="text-base text-gray-700 mb-2">
            abhijeetvn1234@gmail.com
          </div>
          <div className="w-80 flex mt-3">
            <button className="px-3 py-2 border-indigo-700 border-2 text-indigo-700 rounded-md">
              Edit Profile
            </button>
            <button className="px-3 py-2  border-indigo-700 bg-indigo-700 border-2 text-white rounded-md ml-auto">
              Upload Image
            </button>
          </div>
          <div className="w-80 flex mt-4">
            <span className="text-lg text-gray-700 font-bold ml-2">
              5 POSTS
            </span>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 place-items-center place-content-center	lg:gap-8 gap-3 px-4 lg:w-6/12 mx-auto">
        <div className="">
          <img
            className=" object-cover "
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="">
          <img
            className=" object-cover "
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="">
          <img
            className=" object-cover "
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="">
          <img
            className=" object-cover "
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

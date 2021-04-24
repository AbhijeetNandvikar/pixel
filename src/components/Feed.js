import React from "react";
import PixelPost from "./PixelPost";
import post from "../images/post.jpg";

const Feed = () => {
  const data = {
    profilePic: post,
    id: "qwrwerwer",
    image: post,
    dateAndTime: "21st April 2020, 11:30PM",
    name: "Abhijeet Nandvikar",
    bio: "Hi, I am a Frontend Developer",
    likes: [],
  };
  return (
    <div>
      {/* This is Feed page */}
      <div className="flex flex-col items-center">
        <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} />
      </div>
    </div>
  );
};

export default Feed;

import React from "react";
import PixelPost from "./PixelPost";
import post from "../images/post.jpg";
import { fireStoreRef } from "../firebase";

const Feed = () => {
  const [feed, setFeed] = React.useState([]);
  const data = {
    profilePic: post,
    id: "qwrwerwer",
    image: post,
    dateAndTime: "21st April 2020, 11:30PM",
    name: "Abhijeet Nandvikar",
    bio: "Hi, I am a Frontend Developer",
    likes: [],
  };
  React.useEffect(() => {
    const db = fireStoreRef();
    db.collection("images")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        setFeed(arr);
        console.log(arr);
      });
  }, []);

  const renderFeed = (feed) => {
    return feed.map((data) => {
      return <PixelPost data={data} />;
    });
  };
  return (
    <div>
      {/* This is Feed page */}
      <div className="flex flex-col items-center">
        {renderFeed(feed)}
        {/* <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} />
        <PixelPost data={data} /> */}
      </div>
    </div>
  );
};

export default Feed;

import React from "react";
import PixelPost from "./PixelPost";
import post from "../images/post.jpg";
import { fireStoreRef } from "../firebase";

const Feed = () => {
  const [feed, setFeed] = React.useState([]);
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
      <div className="flex flex-col items-center px-4">
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

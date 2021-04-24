import React from "react";

const PixelPost = (props) => {
  return (
    <div>
      <div className=" md:max-w-2xl border border-gray-400 rounded-lg bg-white mb-8">
        <div className="header border-b p-4 flex justify-between items-center">
          <div className="left flex flex-row items-center">
            <img
              alt="profile picture"
              className="h-14 w-14 border rounded-full overflow-hidden mr-4 object-cover"
              data-testid="user-avatar"
              draggable="false"
              src={props.data.photoUrl}
            />
            <div className="user-name-and-place flex flex-col">
              <span className="text-lg font-bold">{props.data.name}</span>
              <span className="text font-light text-gray-900">
                {props.data.bio}
              </span>
            </div>
          </div>
          <div className="right">
            <svg
              aria-label="More options"
              className="_8-yf5 "
              fill="#262626"
              height="16"
              viewBox="0 0 48 48"
              width="16"
            >
              <circle
                clip-rule="evenodd"
                cx="8"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="24"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="40"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="feed-img">
          <img
            className="h-postLg w-postLg object-cover"
            src={props.data.downloadURL}
            alt=""
          />
        </div>
        <div className="card-footer p-4">
          <div className="top">
            <div className="icons flex flex-row justify-between items-center">
              <div className="left flex flex-row">
                <div className="like mr-4">
                  <svg
                    aria-label="Like"
                    className="_8-yf5 "
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </div>

                <div className="share">
                  <svg
                    aria-label="Share Post"
                    className="_8-yf5 "
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
              </div>
              <div className="right">
                <div className="save">
                  <svg
                    aria-label="Save"
                    className="_8-yf5 "
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="likes mt-3">
              <span className="font-bold text">122,780 likes</span>
            </div>
            <div className="caption text mt-3">
              <b>{props.data.name + "  "}</b>
              {props.data.description}
            </div>
            <div className="post-date mt-1">
              <span className="text text-gray-900">1 minute ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelPost;

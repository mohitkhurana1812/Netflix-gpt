import React from "react";
import { faAngleDown, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const VideoTitle = ({ title, overview, id }) => {
  const handleScrollToMore = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };
  return (
    <div className="w-screen aspect-video absolute pt-[20%] mt-8 md:mt-0 px-6 md:px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/2">{overview}</p>
      <Link to={`/browse/watch/${id}`}>
        <button className="bg-white text-black w-[3rem] sm:w-[5rem] md:w-[7rem] lg:w-32 p-1 md:p-2 lg:p-3 mx-3 my-0 lg:my-4 font-bold rounded text-xs sm:text-md md:text-lg lg:text-lg">
          <FontAwesomeIcon
            icon={faPlay}
            className="mr-1 sm:mr-2 md:mr-2 lg:mr-3 text-xs sm:text-md md:text-lg lg:text-xl"
          />
          Play
        </button>
      </Link>
      <button
        className="bg-zinc-600 w-[5rem] sm:w-[5rem] md:w-[8rem] lg:w-[9rem] p-1 md:p-2 lg:p-3 my-0 sm:my-2 md:my-2 lg:my-4 font-bold text-white rounded text-xs sm:text-md md:text-lg lg:text-lg bg-opacity-70"
        onClick={handleScrollToMore}
      >
        See More
        <FontAwesomeIcon
          icon={faAngleDown}
          className="pl-1 lg:pl-2 text-xs sm:text-md md:text-lg lg:text-xl"
        />
      </button>
    </div>
  );
};
export default VideoTitle;

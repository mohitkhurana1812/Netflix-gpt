import React from "react";
import {LOGO} from "../utils/constants"
import { Link } from "react-router-dom";

const HeaderPlay = () => {
  return (
    <div className="flex justify-between items-center w-full bg-black absolute py-4 z-10">
     <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      <Link to="/browse">
        <button className="text-white text-md hover:border hover:rounded-lg mt-[1rem] py-1 px-3 mr-10">
          Back
        </button>
      </Link>
    </div>
  );
};

export default HeaderPlay;

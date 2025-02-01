import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { LOGO } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-9">
      <div className="lg:px-10">
        <hr className="h-px my-6 lg:mx-auto bg-zinc-600 border-none" />
        <div className="flex flex-wrap justify-between lg:flex-nowrap">
          <div className="w-full lg:w-2/5 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <div className="pl-4 lg:pl-10">
              <img className="w-44 mx-auto lg:mx-0" src={LOGO} alt="logo" />

              <h1 className="text-white">
                DEVELOPED BY <span className="inline-flex">MOHIT KHURANA</span>
              </h1>

              <div className="flex justify-center lg:justify-start mt-3 -mx-2 px-16 text-white text-2xl">
                <a
                  href="https://www.linkedin.com/in/mohitkhurana96"
                  className="mx-2 hover:opacity-75"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/mohitkhurana1812"
                  className="mx-2 hover:opacity-75"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:pt-5">
            <div className="grid grid-cols-1 gap-6 text-center md:ml-[7rem] sm:ml-[10rem] lg:ml-0 sm:text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 lg:mt-0">
              <div>
                <h3 className="text-white font-bold uppercase">About</h3>
                <a
                  href="https://portfolio-11205.web.app/"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/mohitkhurana96/overlay/1737170103095/single-media-viewer/?profileId=ACoAACGRqsoB-OzNREubMcwUX-57t-NGsb8bEag"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase">Contact</h3>
                <span className="block mt-2 text-sm hover:text-white">
                  mohit.khurana@utah.edu
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-zinc-600 border-none" />

        <div>
          <p className="text-center text-white text-sm lg:text-base">
            © CineflixGPT 2024 - All rights reserved |{" "}
            <span className="inline-flex">Mohit Khurana</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

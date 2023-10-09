/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import {
  AiOutlineClose,
  //   AiOutlineZoomIn,
  //   AiOutlineZoomOut,
  //   AiOutlineFolderAdd,
  //   AiFillFileText,
} from "react-icons/ai";

import Profile from "../components/Profile.jsx";

// eslint-disable-next-line react/prop-types
const About = ({ setAboutOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-auto h-auto text-primary drop-shadow-solid ">
        {/* tab bar */}
        <div
          className={`bg-[#efefef] flex flex-col items-center justify-center w-auto min-w-[15rem] mini:min-w-[16rem] small:min-w-[18rem] phone:min-w-[20rem] tablet:min-w-[30rem] laptop:w-auto h-auto border-2 border-primary `}
        >
          {/* top bar */}
          <div className="bg-secondary  border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center w-1/3 gap-2 ml-2">
              <div
                className="text-2xl active:scale-105"
                onClick={() => setAboutOpen(false)}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
              <p>03_about</p>
            </div>

            <div className="flex justify-end w-1/3 text-primary"></div>
          </div>

          {/* content */}
          <div className="w-auto h-auto">
            <div className="tablet:text-[5rem] flex flex-row flex-wrap items-start justify-center gap-4 px-4 py-5">
              <div
                className="flex flex-col flex-wrap items-center duration-300 ease-in-out w-fit hover:scale-105 hover:drop-shadow-lg "
                onClick={() => setProfileOpen(true)}
              >
                <img
                  width="96"
                  height="96"
                  src="https://img.icons8.com/fluency/96/contact-card.png"
                  alt="contact-card"
                  className=""
                />
                <p className="text-sm font-medium w-[90px] text-center ">
                  03_01_profile
                </p>
              </div>

              <div className="flex flex-col flex-wrap items-center duration-300 ease-in-out w-fit hover:scale-105 hover:drop-shadow-lg ">
                <div className="w-[96px] h-[96px]">
                  <img
                    src="./src/assets/picture.svg"
                    alt="picture-profile"
                    className=""
                  />
                </div>

                <p className="text-sm font-medium w-[90px] text-center ">
                  03_02_picture
                </p>
              </div>

              <a
                href="https://docs.google.com/document/d/1h51BHJUuL6mdWHrwVlfXzZIU96mAU9IRXqOGMV1_RQs/edit?usp=sharing"
                target="blank"
                className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap
                  hover:after:content-['download']
                  hover:after:text-sm
                  hover:after:w-[90px]
                  hover:after:rounded-sm
                  hover:after:text-center
                  hover:after:absolute
                  hover:after:top-1/2
                  hover:after:left-1/2
                  hover:after:-translate-x-1/2
                  hover:after:-translate-y-1/2
                  hover:after:bg-[#efefef]
                  hover:after:p-2
                  "
              >
                <div className="h-[96px] w-[96px] flex items-center justify-center">
                  <img
                    className="scale-110"
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cv-resume-flaticons-lineal-color-flat-icons.png"
                    alt="external-cv-resume-flaticons-lineal-color-flat-icons"
                  />
                </div>

                <p className="text-sm font-medium w-[90px] text-center ">
                  03_03_cv
                </p>
              </a>


            </div>
          </div>
        </div>
      </div>

      <Draggable>
        <div className="absolute inset-0 m-auto w-fit h-fit">
          <div
            className={`
            ${profileOpen ? "" : "hidden"}
          `}
          >
            <Profile setProfileOpen={setProfileOpen} />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default About;

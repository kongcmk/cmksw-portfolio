import React from "react";
import Draggable from "react-draggable";
import {
  AiOutlineClose,
  //   AiOutlineZoomIn,
  //   AiOutlineZoomOut,
  //   AiOutlineFolderAdd,
  //   AiFillFileText,
  AiFillGithub,
} from "react-icons/ai";

import { FcFile } from "react-icons/fc";

const Overview = ({ setOverviewOpen }) => {
  return (
    <div>
      <div
        className={`bg-[#efefef] drop-shadow-solid flex flex-col items-center justify-center w-auto min-w-[16rem] mini:min-w-[17rem] small:min-w-[20rem] phone:min-w-[22rem] tablet:min-w-[24rem] laptop:w-auto h-auto border-2 border-primary `}
      >
        {/* top bar */}
        <div className="border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center w-1/3 h-[100%] ml-2 gap-2">
            <div
              className="text-2xl active:scale-105"
              onClick={() => setOverviewOpen(false)}
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
            <p>01_overview</p>
          </div>

          <div className="flex justify-end w-1/3 text-primary"></div>
        </div>

        <div className="max-h-[60vh] max-w-[764px] px-2 overflow-auto">
          <Hero />
          <LatestProject />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className=" bg-[#efefef]  text-[#0E0E0E] max-h-[640px] flex flex-col  justify-evenly items-center ">
      <div className="flex flex-col items-start justify-start w-full px-4 py-4 phone:gap-2 tablet:gap-6 tablet:pt-[2rem]">
        <h1 className=" text-3xl font-bold tracking-[2px] uppercase small:text-3xl  phone:text-[2.5rem] tablet:text-[4rem] text-[#0E0E0E]">
          Chaimongkol
        </h1>
        <h1 className=" text-3xl font-bold tracking-[2px] uppercase small:text-3xl phone:text-[2.5rem] tablet:text-[4rem] text-[#0E0E0E]">
          Sawat
        </h1>
        <p className="pl-4 text-sm small:text-md phone:text-lg tablet:text-2xl">
          Hello, I’m a software developer w/
          <br />a focus on Full-stack development.
        </p>
      </div>

      <div className="relative flex items-center justify-center h-auto mt-[5rem] mb-[5rem] duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg">
        <span className="absolute  text-center uppercase text-sm  font-light top-[50%] z-10 left-[50%] transform translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#FFD400]">
          <img width="50" height="50" src="https://img.icons8.com/ios/100/mouse-scrolling.png" alt="mouse-scrolling"
          className="p-1 scale-75"
          />
        </span>
        <div className="relative ease-linear animate-spin-slow">
          
          {/* <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="inset-0   scale-[55%] z-0 absolute rounded-full bg-[#FFD400]"
          ></svg> */}

          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="inset-0 rounded-full"
          >
            <defs>
              <path
                id="circle"
                d="M 100, 100
               m -75, 0
               a 75, 75 0 1, 0 150, 0
               a 75, 75 0 1, 0 -150, 0"
              />
            </defs>
            <text width="200" className="tracking-[8px]">
              <textPath
                xlinkHref="#circle"
                className="text-white "
                startOffset="0%"
              >
                They see me scrolling down. ----
              </textPath>
            </text>

            <div className="h-[150px] w-[150px] rounded-full bg-[#FFD400]"></div>
          </svg>
        </div>
      </div>
    </div>
  );
};

const LatestProject = () => {
  return (
    <div className="py-5 mb-[5rem] text-[2rem] w-full font-medium flex flex-col items-center justify-start h-[60vh]">
      <div className="mb-5 font-bold uppercase">
        <h2>Latest Projects</h2>
      </div>
      <div className="text-[1rem] text-[#efefef] w-full px-4 gap-4">
        {/* <div className="flex flex-col items-start justify-center w-full h-auto py-4 pl-10 mb-4 bg-white rounded-md drop-shadow-lg">
          <div className="text-[3rem] w-fit  absolute top-2  right-2 p-1 rounded-full hover:scale-105 hover:animate-bounce">
            < AiFillGithub />
          </div>
          <div className="">
          <img width="96" height="96" src="https://img.icons8.com/color/96/read.png" alt="read" 
          className="scale-90"/>
              </div>
          <div>
          <p className="text-[1rem]">
            book_management_system
          </p>
          <p className="font-light ">
            
          </p>             
          </div>


        </div> */}

        <div className="mb-4 bg-[#0E0E0E] justify-stretch h-auto px-2 pr-4 py-4  gap-2 flex items-center rounded-md drop-shadow-lg border-primary">
          <div className="w-1/4 flex justify-center  fill-[#efefef]">
            <img width="48" height="48" src="https://img.icons8.com/color/48/book.png" alt="book"/>
          </div>

          <div className="w-3/4">
            <p className="text-md ">book_management_system</p>
            <p className="text-sm font-normal text-justify">
              It features core functionalities 
              such as a book database, search, 
              editing, deletion, and user-friendly 
              data services on CLI.</p>
            
            <a href="https://github.com/kongcmk/book-management-system" target="_blank" alt="book_management_system" className="   mt-2 w-full text-[#0E0E0E] flex items-center justify-center bg-[#efefef] hover:bg-[#FFD400] active:scale-105 ease-in duration-300 rounded-md h-[2rem] ">
              source code
            </a>
          </div>
        </div>

        <div className="mb-4 bg-[#0E0E0E] justify-stretch h-auto px-2 pr-4 py-4  gap-2 flex items-center rounded-md drop-shadow-lg border-primary">
          <div className="w-1/4 flex justify-center  fill-[#efefef]">
            <img width="48" height="48" src="https://img.icons8.com/color/96/detective-hat.png" alt="detective-hat"/>
          </div>

          <div className="w-3/4">
            <p className="text-md ">find_your_hat_game</p>
            <p className="text-sm font-normal text-justify">
            Find Your Hat is a CLI game with 
            a unique feature: random hole 
            generation for dynamic gameplay.</p>
            
            <a href="https://github.com/kongcmk/find-your-hat" target="blank"
             className=" mt-2 w-full text-[#0E0E0E] flex items-center justify-center bg-[#efefef] hover:bg-[#FFD400] active:scale-105 ease-in duration-300 rounded-md h-[2rem] ">
              source code
            </a>
          </div>
        </div>
        

        <div className="mb-4 bg-[#0E0E0E] justify-stretch h-auto px-2 pr-4 py-4  gap-2 flex items-center rounded-md drop-shadow-lg border-primary">
          <div className="w-1/4 flex justify-center  fill-[#efefef]">
            <img width="48" height="48" src="https://img.icons8.com/color/48/bmi.png" alt="bmi"/>
          </div>

          <div className="w-3/4">
            <p className="text-md ">bmi_calculator_webpage</p>
            <p className="text-sm font-normal text-justify">
            The BMI Calculator webpage provides a convenient 
            and respectful tool for swiftly assessing your body mass index (BMI) 
            to gain valuable health insights.</p>
            
            <div className="flex items-center w-full gap-2 justify-evenly">
              <a href="https://github.com/kongcmk/bmi-calculator" target="blank"
              className=" mt-2 w-2/3 text-[#0E0E0E] flex items-center justify-center bg-[#efefef] hover:bg-[#FFD400] active:scale-105 ease-in duration-300 rounded-md h-[2rem] ">
                source code
              </a>
              <a href="https://bmi-calculator-psi-two.vercel.app/" target="blank"
              className=" mt-2 w-1/3 text-[#0E0E0E] flex items-center justify-center bg-[#efefef] hover:bg-[#FFD400] active:scale-105 ease-in duration-300 rounded-md h-[2rem] ">
                DEMO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

import { useEffect, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import {
  AiOutlineClose,
  //   AiOutlineZoomIn,
  //   AiOutlineZoomOut,
  //   AiOutlineFolderAdd,
  //   AiFillFileText,
} from "react-icons/ai";
import { FcOpenedFolder, FcFolder, FcFile } from "react-icons/fc";
// import Overview from "../components/Overview.jsx";

// eslint-disable-next-line react/prop-types
const Projects = ({ setProjectsOpen }) => {



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
                  onClick={() => setProjectsOpen(false)}
                >
                  <AiOutlineClose />
                </div>
              </div>

              <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
                <p>02_projects</p>
              </div>

              <div className="flex justify-end w-1/3 text-primary"></div>
            </div>

            <div className="w-auto h-auto">
              <div className="tablet:text-[5rem] flex flex-row flex-wrap items-start justify-center gap-4 px-4 py-5">
                
                <a href="https://github.com/kongcmk/book-management-system" target="blank"
                  className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap
                  hover:after:content-['open']
                  hover:after:text-sm
                  hover:after:absolute
                  hover:after:top-1/2
                  hover:after:left-1/2
                  hover:after:-translate-x-1/2
                  hover:after:-translate-y-1/2
                  hover:after:bg-[#efefef]
                  hover:after:p-2
                  "
                >
                  <img width="96" height="96" src="https://img.icons8.com/fluency/96/code-file.png" alt="code-file" className="scale-90"/>
                  <p className="text-sm font-medium w-[90px] text-center ">02_01_book-management</p>
                </a>

                <a href="https://github.com/kongcmk/book-management-system" target="blank"
                  className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap
                  hover:after:content-['open']
                  hover:after:text-sm
                  hover:after:absolute
                  hover:after:top-1/2
                  hover:after:left-1/2
                  hover:after:-translate-x-1/2
                  hover:after:-translate-y-1/2
                  hover:after:bg-[#efefef]
                  hover:after:p-2
                  "
                >
                  <img width="96" height="96" src="https://img.icons8.com/fluency/96/code-file.png" alt="code-file" className="scale-90"/>
                  <p className="text-sm font-medium w-[90px] text-center ">02_01_book-management</p>
                </a>


                <a href="https://github.com/kongcmk/book-management-system" target="blank"
                  className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap
                  hover:after:content-['open']
                  hover:after:text-sm
                  hover:after:absolute
                  hover:after:top-1/2
                  hover:after:left-1/2
                  hover:after:-translate-x-1/2
                  hover:after:-translate-y-1/2
                  hover:after:bg-[#efefef]
                  hover:after:p-2
                  "
                >
                  <img width="96" height="96" src="https://img.icons8.com/fluency/96/code-file.png" alt="code-file" className="scale-90"/>
                  <p className="text-sm font-medium w-[90px] text-center ">02_01_book-management</p>
                </a>

                <a href="https://github.com/kongcmk/book-management-system" target="blank"
                  className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap
                  hover:after:content-['open']
                  hover:after:text-sm
                  hover:after:absolute
                  hover:after:top-1/2
                  hover:after:left-1/2
                  hover:after:-translate-x-1/2
                  hover:after:-translate-y-1/2
                  hover:after:bg-[#efefef]
                  hover:after:p-2
                  "
                >
                  <img width="96" height="96" src="https://img.icons8.com/fluency/96/code-file.png" alt="code-file" className="scale-90"/>
                  <p className="text-sm font-medium w-[90px] text-center ">02_01_book-management</p>
                </a>

                
              </div>
            </div>

            
          </div>
        </div>
        
    </div>
  );
};

export default Projects;

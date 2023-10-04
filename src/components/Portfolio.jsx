import { useEffect, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import {
  AiOutlineClose,
  //   AiOutlineZoomIn,
  //   AiOutlineZoomOut,
  //   AiOutlineFolderAdd,
  //   AiFillFileText,
} from "react-icons/ai";
import { FcOpenedFolder, FcFolder } from "react-icons/fc";
import Overview from "../components/Overview.jsx";
import Projects from "../components/Projects.jsx";
// eslint-disable-next-line react/prop-types
const Portfolio = ({ folderCloseHandler }) => {
  // [darkMode, setDarkMode] = useState(false);

  const [overviewOpen, setOverviewOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div>
      <Draggable>
        <div className="flex flex-col items-center justify-center w-auto h-auto text-primary drop-shadow-solid ">
          {/* tab bar */}
          <div
            className={`bg-[#efefef] flex flex-col items-center justify-center w-auto min-w-[15rem] mini:min-w-[16rem] small:min-w-[18rem] phone:min-w-[20rem] tablet:min-w-[26rem] laptop:w-auto h-auto border-2 border-primary `}
          >
            {/* top bar */}
            <div className="bg-secondary  border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
              <div className="flex flex-row items-center w-1/3 h-[100%] ml-2 gap-2">
                <div
                  className="text-2xl active:scale-105"
                  onClick={folderCloseHandler}
                >
                  <AiOutlineClose />
                </div>

              </div>

              <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
                <p>cmksw</p>
              </div>

              <div className="flex justify-end w-1/3 text-primary"></div>
            </div>

            <div className="h-full">
              <div className="text-[5rem] tablet:text-[5rem] flex flex-row flex-wrap items-start justify-center gap-8 px-4 py-5">
                <div
                  className="flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
                  onClick={() => setOverviewOpen(true)}
                >
                  {overviewOpen ? <FcOpenedFolder /> : <FcFolder />}

                  <p className="text-sm font-medium">01_overview</p>
                </div>

                <div
                  className="flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
                  onClick={() => setProjectsOpen(true)}
                >
                  {projectsOpen ? <FcOpenedFolder /> : <FcFolder />}

                  <p className="text-sm font-medium ">02_projects</p>
                </div>

                <div className="flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg">
                  <FcOpenedFolder />
                  <p className="text-sm font-medium">03_about</p>
                </div>

                <div className="flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg">
                  <FcOpenedFolder />
                  <p className="text-sm font-medium">04_contact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>

      {/* overview */}
      <div className="centerPage ">
        <Draggable>
          <div
            className={`
            ${overviewOpen ? "" : "hidden"}
          `}
          >
            <Overview setOverviewOpen={setOverviewOpen} />
          </div>
        </Draggable>
      
      </div>

      {/* projects */}
      <div className="w-fit">
        <Draggable>
          <div
            className={`
            ${projectsOpen ? "" : "hidden"}
          `}
          >
            <Projects setProjectsOpen={setProjectsOpen} />
          </div>
        </Draggable>
      </div>


      
    </div>
  );
};

export default Portfolio;

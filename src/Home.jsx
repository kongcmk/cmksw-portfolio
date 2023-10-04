import React, { useState } from "react";

import Draggable from "react-draggable";
// import {
//   AiOutlineClose,
//   AiOutlineZoomIn,
//   AiOutlineZoomOut,
//   AiOutlineFolderAdd,
//   AiFillFileText,
// } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";

// component
import Portfolio from "./components/Portfolio.jsx";

const Home = () => {
  // [darkMode, setDarkMode] = useState(false);
  const [folderOpen, setFolderOpen] = useState(false);

  const folderHandler = () => {
    setFolderOpen(true);
  };
  return (
    <div className="relative ">
    <Draggable>
      <div className="text-primary w-full h-[100vh] mx-auto flex flex-col justify-center items-center max-w-[1440px] ">
        {/* tab bar */}
        <div className={`flex flex-col items-center justify-center `}>
          <div
            className="text-[5rem] flex flex-col items-center"
            onClick={folderHandler}
          >
            <FcOpenedFolder />
            <p className="text-sm font-bold uppercase text-primary">cmksw</p>
          </div>
        </div>
      </div>
    </Draggable>

    <Draggable>
        <div className="absolute inset-0">
           <Portfolio /> 
        </div>
        
    </Draggable>
    
    </div>

  );
};

export default Home;

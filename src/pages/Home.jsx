import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { FcOpenedFolder, FcFolder } from "react-icons/fc";

// Import your styles here
import "../style/home.css";

import Portfolio from "../components/Portfolio.jsx";

const Home = () => {
  const [folderOpen, setFolderOpen] = useState(false);

  const folderHandler = () => {
    setFolderOpen(true);
  };

  const folderCloseHandler = () => {
    setFolderOpen(false);
  };

  return (
    <div className="relative w-full h-[100vh]">
      <DraggableCore>
        <div className="centerPage">
          {/* Tab bar */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="text-[5rem] flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
              onClick={folderHandler}
            >
              {folderOpen ? <FcOpenedFolder /> : <FcFolder />}
              <div></div>
              <p className="text-sm font-bold uppercase text-primary">
                00-portfolio
              </p>
            </div>
          </div>
        </div>
      </DraggableCore>

      <DraggableCore>
        <div
          className={`w-fit h-fit inset-y-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute ${
            folderOpen ? "" : "hidden"
          }`}
        >
          <Portfolio folderCloseHandler={folderCloseHandler} />
        </div>
      </DraggableCore>

      <div
        className={`absolute top-[90%] left-1/2 transform translate-y-[-50%] translate-x-[-50%] ${
          folderOpen ? "hidden" : ""
        }`}
      >
        <p className="text-sm font-normal text-center opacity-50 animate-bounce">
          click open{" "}
          <span className="italic font-medium uppercase">"00_portfolio"</span>{" "}
          to show more
        </p>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import {
  AiOutlineClose,
//   AiOutlineZoomIn,
//   AiOutlineZoomOut,
//   AiOutlineFolderAdd,
//   AiFillFileText,
} from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";



const Portfolio = () => {
  // [darkMode, setDarkMode] = useState(false);
  const [scale, setScale] = useState("w-auto h-auto");

//   const increaseScale = () => {
//        setScale("w-4s/6 h-[40vh]"); 

//   };

//   const decreaseScale = () => {
//     setScale("w-2/6 h-auto"); 
//   };
//   useEffect(() => {
//     // This code will run whenever the "scale" state changes.
//     console.log(`Scale changed to: ${scale}`);
//   }, [scale]);

  return (
    <Draggable>
      <div className="text-primary w-full h-[100vh] mx-auto flex flex-col justify-center items-center max-w-[1440px] ">
        
        {/* tab bar */}
        <div className={`bg-secondary flex flex-col items-center justify-center ${scale} border-2 border-primary `}>
          {/* top bar */}
          <div className="bg-secondary  border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center w-1/3 h-[100%] gap-2">
              <div className="text-2xl active:scale-105">
                <AiOutlineClose />
              </div>
              {/* <div className="text-2xl active:scale-105" onClick={increaseScale}>
                <AiOutlineZoomIn />
              </div>
              <div className="text-2xl" onClick={decreaseScale}>
                <AiOutlineZoomOut />
              </div> */}
            </div>

            <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
              <p>cmksw</p>
            </div>

            <div className="flex justify-end w-1/3 text-primary"></div>
          </div>
        
        <div className="h-full">
            <div className="flex flex-row flex-wrap items-start justify-center gap-5 px-2 pt-5">

                <div className="text-[5rem] flex flex-col items-center">
                < FcOpenedFolder />
                <p className="text-sm">overview</p>
                </div>

                <div className="text-[5rem] flex flex-col items-center">
                < FcOpenedFolder />
                <p className="text-sm">projects</p>
                </div>

                <div className="text-[5rem] flex flex-col items-center">
                < FcOpenedFolder />
                <p className="text-sm">about</p>
                </div>

                <div className="text-[5rem] flex flex-col items-center">
                < FcOpenedFolder />
                <p className="text-sm">contact</p>
                </div>
            </div>            
        </div>

        
        </div>
      </div>
    </Draggable>
  );
};

export default Portfolio;

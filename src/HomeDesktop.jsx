import { useState } from "react";
import { 
    AiOutlineClose, 
    AiOutlineZoomIn,
    AiOutlineZoomOut 
} from "react-icons/ai";

import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


const HomeDesktop = () => {
    // [darkMode, setDarkMode] = useState(false);
    
  return (
    <div className="text-primary w-full h-[100vh] mx-auto flex flex-col justify-center items-center max-w-[1440px] ">
      {/* frame */}
      <div className="flex flex-col items-center justify-center w-5/6 h-[80vh] border-2 border-primary">
        {/* top bar */}
        <div className="w-full border-2 h-[4rem] px-2 flex flex-row justify-between items-center">
          <div className="flex flex-row w-1/3 gap-2">
            <div>< AiOutlineClose /></div>
            <div>< AiOutlineZoomIn /></div>
            <div>< AiOutlineZoomOut /></div>

          </div>

          <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
            <p>cmksw</p>
          </div>
          <div className="flex justify-end w-1/3 text-primary">

          </div>
        </div>

        {/* windows */}
        <div className="flex flex-row w-full h-[100%] ">
          {/* window left */}
          <div className="h-[100%] w-2/5 border-r-2">
            <div className="h-[3rem] border-b-2">bar</div>
            <div>content</div>
          </div>

          {/* window right */}
          <div className="h-[100%] w-3/5">
            {/* content */}
            <div className="flex flex-col items-center justify-between w-full h-full">
              
              <div className="h-[3rem] border-b-2 flex items-center">
                bar
              </div>

              <div className="flex flex-col items-center w-full border-b-2 bg-slate-300 h-[100%]">
                <div className="h-full">content</div>
              </div>

              <div className="h-[3rem] flex items-center">
                status
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktop;

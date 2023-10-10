import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Picture = ({ setPictureOpen }) => {
  return (
    <div>
      <div className="bg-[#efefef] drop-shadow-solid flex flex-col items-center justify-center w-auto min-w-[16rem] mini:min-w-[17rem] small:min-w-[20rem] phone:min-w-[22rem] tablet:min-w-[24rem] laptop:w-auto h-auto border-2 border-primary">
        {/* Top bar */}
        <div className="border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center w-1/3 h-[100%] ml-2 gap-2">
            <div
              className="text-2xl cursor-pointer active:scale-105"
              onClick={() => setPictureOpen(false)}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
            <p>03_02_picture</p>
          </div>
          <div className="flex justify-end w-1/3 text-primary"></div>
        </div>

        <div className="flex-col flex max-w-[764px]">
          <Detail />
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <div className="bg-[#efefef] text-[#0E0E0E] max-h-[640px] flex flex-col justify-evenly items-center">
      <div className="flex flex-col items-start justify-start w-full phone:gap-2 tablet:gap-6">
        <div className="">
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHcY5EnDmFFwuD3KViNcAbIsEalweKeZlEOoocasH9P89bp5iSXt_ofF6wLuts5VMf2I-kTamvWfa2-JJvB-5GaLpcQFAPqYb9gHLJQxr4tiBus-s4hbJy6XctZ7HvdjUffiCZOEnxbf0AtXr6aB3A3R=w693-h924-s-no?authuser=0"
            alt="picture-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Picture;

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Profile = ({ setProfileOpen }) => {
  return (
    <div>
      <div className=" bg-[#efefef] drop-shadow-solid flex flex-col items-center justify-center w-auto min-w-[16rem] mini:min-w-[17rem] small:min-w-[20rem] phone:min-w-[22rem] tablet:min-w-[24rem] laptop:w-auto h-auto border-2 border-primary">
        {/* Top bar */}
        <div className="  border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center w-1/3 h-[100%] ml-2 gap-2">
            <div
              className="text-2xl cursor-pointer active:scale-105"
              onClick={() => setProfileOpen(false)}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
            <p>03_01_profile</p>
          </div>
          <div className="flex justify-end w-1/3 text-primary"></div>
        </div>

        <div className=" pt-32 small:pt-24 phone:pt-20 tablet:pt-2 max-h-[60vh]  flex-col flex max-w-[764px] px-2 items-start justify-start overflow-auto">
          <Detail />
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <div className="bg-[#efefef] text-[#0E0E0E] max-h-[640px] flex flex-col justify-evenly items-center">
      <div className=" flex flex-col items-start justify-start w-full px-4 py-4 phone:gap-2 tablet:gap-6 tablet:pt-[2rem]">
        <h1 className="text-3xl font-bold tracking-[2px] uppercase small:text-3xl phone:text-[2.5rem] tablet:text-[4rem] text-[#0E0E0E]">
          Chaimongkol
        </h1>
        <h1 className="text-3xl font-bold tracking-[2px] uppercase small:text-3xl phone:text-[2.5rem] tablet:text-[4rem] text-[#0E0E0E]">
          Sawat
        </h1>
        <p className="pl-4 text-sm small:text-md phone:text-lg tablet:text-2xl">
          Hello, I’m a software developer with a focus on Full-stack development.
        </p>
      </div>

      <div className="gap-4 px-4 text-justify text-md">
        <p className="mb-4">
          I previously graduated in film earlier this year. Afterward, I joined Generation Thailand's junior software developer #5 boot camp to learn the MERN stack (MongoDB, Express.js, React, Node.js), which has now concluded. I've also started participating in BorntoDev's Back-end Dev Init #1 project to deepen my Back-end development knowledge.
        </p>
        <p className="mb-4">
          I'm strongly interested in becoming a fullstack developer, especially in the MERN stack, known for building efficient user-facing applications.
        </p>
        <p className="mb-4">
          Through intensive training, I aimed to gain the knowledge and skills to enter the industry. I was ready to challenge myself and work hard to continue growing as a skilled Junior Developer, with the potential to become even better in the future.
        </p>
        <p className="mb-4">
          Thank you for the opportunity to introduce myself, and I'm always ready to learn and develop in this field.
        </p>
      </div>
    </div>
  );
};

export default Profile;

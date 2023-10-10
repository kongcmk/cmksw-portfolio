import React, { useState } from "react";
import { IoLogoVercel } from "react-icons/io5";
// import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";

import projectsData from "../projectsData/projectsData.json";

const Overview = ({ setOverviewOpen }) => {
  const [projects, setProjects] = useState(projectsData);

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

        <div className="max-h-[60vh] flex-col flex max-w-[764px] px-2 overflow-auto">
          <Hero />
          <LatestProject projects={projects} />
          <Skills />
          <Contact />
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
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/100/mouse-scrolling.png"
            alt="mouse-scrolling"
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

const LatestProject = ({ projects }) => {
  return (
    <div className="py-5 mb-[3rem] text-[2rem] w-full font-medium flex flex-col items-center justify-start h-auto">
      <div className="mb-2 font-bold uppercase">
        <h2>Latest Projects</h2>
      </div>

      <div className="text-[1rem] text-[#efefef] w-full px-2 gap-4">
        <div className="w-auto h-auto py-[2rem]">
          {/* projects mapping */}
          <ul>
            {projects.slice(-3).map((project) => (
              <li
                key={project.id}
                className="flex flex-col justify-center h-auto mx-2 mb-4 overflow-hidden bg-[#0E0E0E] rounded-md drop-shadow-md duration-300 ease-in-out hover:scale-[103%] hover:text-[#0E0E0E] hover:bg-[#FFD400]"
              >
                <div className="w-full ">
                  {project.image !== "" && (
                    <div className="relative w-full h-auto">
                      <img
                        src={project.image}
                        alt="image-project"
                        className="object-cover w-full h-full transition-transform transform"
                      />
                    </div>
                  )}

                  <div className="flex flex-col flex-wrap px-2 py-4">
                    <h2 className="w-full mb-4 text-center uppercase text-md">
                      <strong>{project.name}</strong>
                    </h2>
                    <p className="px-2 text-xs text-justify">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-row items-center justify-center gap-2 mx-4 mb-4 text-[#0E0E0E]">
                      <a
                        href={project.source_code}
                        target="blank"
                        className={`flex justify-center py-1 text-center border-1 rounded-lg text-xs uppercase bg-white border-primary hover:bg-[#0E0E0E] hover:text-white ease-in duration-300
                          ${project.demo === "" ? "w-full" : "w-2/3"}
                          `}
                      >
                        source code
                      </a>
                      {project.demo !== "" && (
                        <a
                          href={project.demo}
                          target="blank"
                          className="flex justify-center w-1/3 py-1 text-xs text-center  rounded-lg  bg-white border-primary hover:bg-[#0E0E0E] hover:text-white  ease-in duration-300"
                        >
                          DEMO
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="py-5 mb-[5rem] text-[2rem] w-full font-medium flex flex-col items-center justify-start h-auto">
      {/* <div className="mb-5 font-bold uppercase">
      <h2>Skills</h2>
    </div> */}
      <div className="text-[2rem] text-[#0E0E0E] w-full px-4 gap-4">
        <div className="flex flex-col flex-wrap items-center justify-center h-auto gap-2 px-2 py-4 pr-4 mb-4 rounded-md drop-shadow-lg border-primary">
          <div className="mb-5 font-bold uppercase">
            <h2>Technical Skills</h2>
          </div>

          <div className="flex flex-row flex-wrap gap-2 justify-evenly">
            <div className="flex justify-center w-fit">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0277BD"
                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                  ></path>
                  <path
                    fill="#039BE5"
                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                  ></path>
                  <path
                    fill="#EEE"
                    d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#E65100"
                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                  ></path>
                  <path
                    fill="#FF6D00"
                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                  ></path>
                  <path
                    fill="#EEE"
                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="none"
                    stroke="#000001"
                    strokeMiterlimit="10"
                    strokeWidth="3.3"
                    d="M23.783,22.352v9.819 c0,3.764-4.38,4.022-6.283,0.802"
                  ></path>
                  <path
                    fill="none"
                    stroke="#000001"
                    strokeMiterlimit="10"
                    strokeWidth="3.3"
                    d="M34.69,25.343 c-1.739-2.727-5.674-2.345-5.84,0.558c-0.214,3.757,6.768,2.938,6.247,7.107c-0.365,2.92-4.874,3.858-7.193-0.065"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#80deea"
                    d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                  ></path>
                  <path
                    fill="#80deea"
                    d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                  ></path>
                  <path
                    fill="#80deea"
                    d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                  ></path>
                  <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#388e3c"
                    d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
                  ></path>
                  <path
                    fill="#37474f"
                    d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
                  ></path>
                  <path
                    fill="#2e7d32"
                    d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                  ></path>
                  <path
                    fill="#37474f"
                    d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#5d4037"
                    d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
                  ></path>
                  <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
                  <path
                    fill="#4caf50"
                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
                  ></path>
                  <path
                    fill="#81c784"
                    d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#212121"
                    d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
                  ></path>
                  <path
                    fill="#212121"
                    d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00acc1"
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-center h-auto gap-2 px-2 py-4 pr-4 mb-4 rounded-md drop-shadow-lg border-primary">
          <div className="mb-5 font-bold uppercase">
            <h2>Tools</h2>
          </div>

          <div className="flex flex-row flex-wrap gap-2 justify-evenly">
            <div className="flex justify-center w-fit">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#F4511E"
                    d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                  ></path>
                </svg>{" "}
              </div>
            </div>

            <div className="flex justify-center w-fit">
              <div className="flex items-center justify-center">
                <img
                  width="65"
                  height="65"
                  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png"
                  alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="75"
                  height="75"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e64a19"
                    d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                  ></path>
                  <path
                    fill="#7c4dff"
                    d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                  ></path>
                  <path
                    fill="#66bb6a"
                    d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                  ></path>
                  <path
                    fill="#ff7043"
                    d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                  ></path>
                  <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-[75px] flex items-center justify-center px-2">
                <img
                  src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                  alt="postman"
                />
              </div>
            </div>

            <div className="flex justify-center ">
              <div className="flex items-center justify-center  scale-[225%] p-4">
                <IoLogoVercel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="py-5 mb-[5rem] text-[2rem] w-full font-medium flex flex-col items-center justify-start h-auto">
      {/* <div className="mb-5 font-bold uppercase">
      <h2>Skills</h2>
    </div> */}
      <div className="text-[2rem] text-[#0E0E0E] w-full px-4 gap-4">
        <div className="flex flex-col flex-wrap items-center justify-center h-auto gap-2 px-2 py-4 pr-4 mb-4 rounded-md drop-shadow-lg border-primary">
          <div className="mb-5 font-bold uppercase">
            <h2>Contact</h2>
          </div>
          <div className="flex flex-col justify-center w-4/5 gap-2">
            <div className="flex flex-row items-center">
              <div className="w-1/4 f-[96px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </div>

              <a
                href=" https://www.linkedin.com/in/chaimongkol-sawat/"
                target="blank"
                className="w-3/4 text-sm "
              >
                linkedin.com/in/chaimongkol-sawat
              </a>
            </div>

            <div className="flex flex-row items-center">
              <div className="w-1/4 f-[96px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1"
                    x1="4"
                    x2="44"
                    y1="23.508"
                    y2="23.508"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4c4c4c"></stop>
                    <stop offset="1" stop-color="#343434"></stop>
                  </linearGradient>
                  <path
                    fill="url(#rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
                  ></path>
                  <path
                    d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"
                  ></path>
                </svg>
              </div>

              <a
                href="https://github.com/kongcmk"
                target="blank"
                className="w-3/4 text-sm "
              >
                github.com/kongcmk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Overview;

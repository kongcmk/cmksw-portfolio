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
                <div className="w-full">
                  {project.image !== "" && (
                    <div className="">
                      <img
                        src={project.image}
                        alt="image-project"
                        className="object-cover h-48 w-96"
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
                    stroke-miterlimit="10"
                    stroke-width="3.3"
                    d="M23.783,22.352v9.819 c0,3.764-4.38,4.022-6.283,0.802"
                  ></path>
                  <path
                    fill="none"
                    stroke="#000001"
                    stroke-miterlimit="10"
                    stroke-width="3.3"
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
export default Overview;

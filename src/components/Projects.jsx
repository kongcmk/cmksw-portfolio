import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import projectsData from "../projectsData/projectsData.json";

const Projects = ({ setProjectsOpen }) => {
  const [projects, setProjects] = useState(projectsData);

  const sortedProjectsData = projects.sort((a, b) => b.id - a.id);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-auto h-auto text-primary drop-shadow-solid ">
        {/* Tab bar */}
        <div
          className={`bg-[#efefef] flex flex-col items-center justify-center w-auto min-w-[15rem] mini:min-w-[16rem] small:min-w-[18rem] phone:min-w-[20rem] tablet:min-w-[30rem] laptop:w-auto h-auto border-2 border-primary`}
        >
          {/* Top bar */}
          <div className="bg-secondary border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center w-1/3 gap-2 ml-2">
              <div
                className="text-2xl cursor-pointer active:scale-105"
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

          {/* Content */}
          <div className="w-auto h-auto max-h-[60vh] overflow-auto py-[2rem]">
            {/* Projects mapping */}
            <ul>
              {sortedProjectsData.map((project) => (
                <li
                  key={project.id}
                  className="flex flex-col justify-center h-auto mx-4 mb-4 overflow-hidden bg-white rounded-md drop-shadow-md duration-300 ease-in-out hover:scale-[103%] hover:bg-[#FFD400]"
                >
                  <div className="w-full">
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
                      <div className="flex flex-row items-center justify-center gap-2 mx-4 mb-4">
                        <a
                          href={project.source_code}
                          target="blank"
                          className={`flex justify-center py-1 text-center border-1 rounded-lg text-xs uppercase bg-white border-primary hover:bg-[#0E0E0E] hover:text-white ease-in duration-300 ${
                            project.demo === "" ? "w-full" : "w-2/3"
                          }`}
                        >
                          source code
                        </a>
                        {project.demo !== "" && (
                          <a
                            href={project.demo}
                            target="blank"
                            className="flex justify-center w-1/3 py-1 text-xs text-center rounded-lg bg-white border-primary hover:bg-[#0E0E0E] hover:text-white ease-in duration-300"
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
    </div>
  );
};

export default Projects;

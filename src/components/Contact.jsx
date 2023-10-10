/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { AiOutlineClose, AiFillGithub } from "react-icons/ai";
import Profile from "../components/Profile.jsx";
import Picture from "../components/Picture.jsx";

const Contact = ({ setContactOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <div className="m-auto">
      {/* mobile mode */}
      <div className="w-full h-full laptop:hidden">
      <div>
        <div className="flex flex-col items-center justify-center w-auto h-auto m-auto text-primary drop-shadow-solid ">
          <div className={`bg-[#efefef] flex flex-col items-center justify-center w-auto min-w-[15rem] mini:min-w-[16rem] small:min-w-[18rem] phone:min-w-[20rem] tablet:min-w-[30rem] laptop:w-auto h-auto border-2 border-primary`}>
            <div className="bg-secondary border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
              <div className="flex flex-row items-center w-1/3 gap-2 ml-2">
                <div className="text-2xl active:scale-105" onClick={() => setContactOpen(false)}>
                  <AiOutlineClose />
                </div>
              </div>
              <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
                <p>04_contact</p>
              </div>
              <div className="flex justify-end w-1/3 text-primary"></div>
            </div>
            <div className="w-auto h-auto">
              <div className="tablet:text-[5rem] flex flex-row flex-wrap items-start justify-center gap-4 px-4 py-5">

                <a href="https://www.linkedin.com/in/chaimongkol-sawat/" target="blank" className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap hover:after:content-['open'] hover:after:text-sm hover:after:w-[90px] hover:after:rounded-sm hover:after:text-center hover:after:absolute hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:bg-[#efefef] hover:after:p-2">
                  <div className="h-[96px] w-[96px] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="75" height="75" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>  
                  </div>
                  <p className="text-sm font-medium w-[90px] text-center">04_01_linkedin</p>
                </a>

                <a href="https://github.com/kongcmk" target="blank" className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap hover:after:content-['open'] hover:after:text-sm hover:after:w-[90px] hover:after:rounded-sm hover:after:text-center hover:after:absolute hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:bg-[#efefef] hover:after:p-2">
                  <div className="h-[96px] w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="75" height="75" viewBox="0 0 64 64">
<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg>
                  </div>
                  <p className="text-sm font-medium w-[90px] text-center">04_02_github</p>
                </a>



              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute inset-0 m-auto w-fit h-fit">
          <div className={`${profileOpen ? "" : "hidden"}`}>
            <Profile setProfileOpen={setProfileOpen} />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute inset-0 m-auto w-fit h-fit">
          <div className={`${pictureOpen ? "" : "hidden"}`}>
            <Picture setPictureOpen={setPictureOpen} />
          </div>
        </div>
      </div>
      </div>
      {/* desktop mode */}
      <div className="hidden w-full h-full laptop:block">
      <Draggable>
        <div className="flex flex-col items-center justify-center w-auto h-auto m-auto text-primary drop-shadow-solid ">
          <div className={`bg-[#efefef] flex flex-col items-center justify-center w-auto min-w-[15rem] mini:min-w-[16rem] small:min-w-[18rem] phone:min-w-[20rem] tablet:min-w-[30rem] laptop:w-auto h-auto border-2 border-primary`}>
            <div className="bg-secondary border-b-2 border-primary w-full h-[5rem] px-2 flex flex-row justify-between items-center">
              <div className="flex flex-row items-center w-1/3 gap-2 ml-2">
                <div className="text-2xl active:scale-105" onClick={() => setContactOpen(false)}>
                  <AiOutlineClose />
                </div>
              </div>
              <div className="flex justify-center w-1/3 font-bold uppercase tracking-[2px]">
                <p>04_contact</p>
              </div>
              <div className="flex justify-end w-1/3 text-primary"></div>
            </div>
            <div className="w-auto h-auto">
              <div className="tablet:text-[5rem] flex flex-row flex-wrap items-start justify-center gap-4 px-4 py-5">

                <a href="https://www.linkedin.com/in/chaimongkol-sawat/" target="blank" className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap hover:after:content-['open'] hover:after:text-sm hover:after:w-[90px] hover:after:rounded-sm hover:after:text-center hover:after:absolute hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:bg-[#efefef] hover:after:p-2">
                  <div className="h-[96px] w-[96px] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="75" height="75" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>  
                  </div>
                  <p className="text-sm font-medium w-[90px] text-center">04_01_linkedin</p>
                </a>

                <a href="https://github.com/kongcmk" target="blank" className="w-fit flex flex-col items-center duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg flex-wrap hover:after:content-['open'] hover:after:text-sm hover:after:w-[90px] hover:after:rounded-sm hover:after:text-center hover:after:absolute hover:after:top-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:bg-[#efefef] hover:after:p-2">
                  <div className="h-[96px] w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="75" height="75" viewBox="0 0 64 64">
<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg>
                  </div>
                  <p className="text-sm font-medium w-[90px] text-center">04_02_github</p>
                </a>


              </div>
            </div>
          </div>
        </div>
      </Draggable>
      <Draggable>
        <div className="absolute inset-0 m-auto w-fit h-fit">
          <div className={`${profileOpen ? "" : "hidden"}`}>
            <Profile setProfileOpen={setProfileOpen} />
          </div>
        </div>
      </Draggable>
      <Draggable>
        <div className="absolute inset-0 m-auto w-fit h-fit">
          <div className={`${pictureOpen ? "" : "hidden"}`}>
            <Picture setPictureOpen={setPictureOpen} />
          </div>
        </div>
      </Draggable>
      </div>


    </div>
  );
};

export default Contact;

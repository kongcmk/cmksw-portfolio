import Layout from "./Layout.jsx";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  return (
    <Layout>
      {/* hero */}
      <div className="h-full">
        <Hero />
      </div>
      <div className="mt-[10rem]">
        <LatestProject />
      </div>
    </Layout>
  );
};

export default Homepage;

const Hero = () => {
  return (
    <div className="text-[#0E0E0E] h-[80vh] flex flex-col  justify-around items-center ">
      <div className="flex flex-col items-center h-[80vh] justify-center w-full px-4 ">
        <h1 className="mb-4 text-3xl font-bold tracking-[2px] uppercase small:text-4xl phone:text-5xl tablet:text-[7rem] laptop:text-[8rem] desktop:text-[12rem] text-[#0E0E0E]">
          CMKSW
        </h1>
        <p className="text-sm small:text-md phone:text-lg tablet:text-2xl laptop:text-3xl tablet:mt-4 laptop:mt-5 desktop:text-4xl">
          Hello, I’m a software developer w/
          <br />a focus on Full-stack development.
        </p>
      </div>

      <div className="mt-[4rem] relative flex items-center justify-center h-auto ease-in hover:scale-105">
        <p className="absolute  text-center uppercase text-sm  font-light top-[50%] z-10 left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          scroll
          <br />
          down
        </p>
        <div className="relative ease-linear animate-spin-slow">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="inset-0   scale-[55%] z-0 absolute rounded-full bg-[#FFD400]"
          ></svg>

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
            <text width="200" className="tracking-[2px]">
              <textPath
                xlinkHref="#circle"
                className="text-white "
                startOffset="0%"
              >
                Part of a heart-healthy breakfast....sorta! ----------
              </textPath>
            </text>

            <div className="h-[150px] w-[150px] rounded-full bg-[#FFD400]"></div>
          </svg>
        </div>
      </div>
    </div>
  );
};

const LatestProject = () => {
  const settings = {
    infinite: true, // การเลื่อนไปมาเป็นวน
    slidesToShow: 3, // จำนวนสไลด์ที่แสดงในแต่ละครั้ง
    slidesToScroll: 1, // จำนวนสไลด์ที่เลื่อนที่ครั้งเดียว
    centerMode: true, // แสดงสไลด์ที่อยู่ตรงกลาง
    centerPadding: "0px", // ระยะห่างระหว่างสไลด์ที่แสดงที่กลาง
    arrows: false, // แสดงปุ่มลูกศรสำหรับเลื่อน
  };

  return (
    <div className="h-[70vh]">
      <Slider {...settings}>
        <div className="flex flex-col items-center justify-center p-4 text-center ">
          <div className="bg-gray-300 rounded-lg shadow-md h-52"></div>
          <p className="mt-4">Slide 2</p>
        </div>
        <div className="p-4">
          <div className="h-48 bg-gray-300 rounded-lg shadow-md">
            <p>Slide 3</p>
          </div>
        </div>
        <div className="p-4">
          <div className="h-48 bg-gray-300 rounded-lg shadow-md">
            <p>Slide 3</p>
          </div>
        </div>
        <div className="p-4">
          <div className="h-48 bg-gray-300 rounded-lg shadow-md">
            <p>Slide 3</p>
          </div>
        </div>
        <div className="p-4">
          <div className="h-48 bg-gray-300 rounded-lg shadow-md">
            <p>Slide 3</p>
          </div>
        </div>
        {/* เพิ่มสไลด์เพิ่มเติมตามความต้องการ */}
      </Slider>
    </div>
  );
};

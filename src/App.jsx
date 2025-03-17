import React from "react";
import Card from "./Card";
import InputBox from "./InputBox";
import { useState, useEffect } from "react";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-exo lg:flex h-screen items-center justify-center xl:gap-10">
      <div
        id="leftBox"
        className="flex flex-col items-center lg:items-start text-center lg:text-start p-4 space-y-2 sm:space-y-4 lg:space-y-10"
      >
        <img
          className="w-40 sm:w-56 lg:w-[20rem] xl:w-[30rem]"
          src="./logo.png"
          alt="EZ works logo"
        />
        <h1 className="text-3xl sm:text-[2rem] xl:text-[3rem] text-primary sm:text-nowrap">
          {width < 1024 ? (
            <span> A Suite of Business Support Services </span>
          ) : (
            <span> Suite of Business Support Services</span>
          )}
        </h1>

        <p className="text-lg sm:text-xl max-w-screen-sm lg:text-2xl text-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nemo
          aliquam consequuntur! Incidunt est alias distinctio minima accusantium
          facilis ipsa?
        </p>
        {width >= 650 && (
          <div className="max-w-screen-md">
            <InputBox />
          </div>
        )}
      </div>

      <div id="rightBox" className="p-4 max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CardData.map((elem, index) => (
            <Card elem={elem} key={index} />
          ))}

        </div>


      </div>
      {width < 650 && <InputBox />}
    </div>
  );
};

export default App;

const CardData = [
  {
    id: 1,
    imgSrc: "./pres.png",
    title: "Presentation Design",
  },
  {
    id: 2,
    imgSrc: "./videos.png",
    title: "Audio - Visual Production",
  },
  {
    id: 3,
    imgSrc: "./translation.png",
    title: "Translation Services",
  },
  {
    id: 4,
    imgSrc: "./graphic.png",
    title: "Graphic Design",
  },
  {
    id: 5,
    imgSrc: "./research.png",
    title: "Research & Analysis",
  },
  {
    id: 6,
    imgSrc: "./data.png",
    title: "Data Processing",
  },
];

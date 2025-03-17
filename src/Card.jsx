import React from "react";

const CardData = [
  {
    id: 6,
    imgSrc: "./data.png",
    title: "Data Processing",
  },
];

function Card({ elem }) {

  const {imgSrc , title } = elem
  return (
  
      <div className="bg-primary text-white p-4 rounded-md space-y-2 w-full ">
        <div className="flex items-center gap-2 xl:gap-4">
          <img
            className="w-12 xl:w-16"
            src={imgSrc}
            alt="Presentation Design"
          />
          <h1 className=" text-3xl lg:text-base xl:text-2xl text-title">
            {title}
          </h1>
        </div>
        <p className="text-lg lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis?
        </p>
      </div>
      
    
  );
}

export default Card;

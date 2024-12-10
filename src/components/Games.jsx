import React from "react";
import item1 from "../assets/item.png";
import item2 from "../assets/item (1).png";
import item3 from "../assets/item (2).png";
import item4 from "../assets/item (3).png";

const Games = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#272626]">
      <h1 className="text-5xl font-bold p-9 text-white">Games</h1>
      <div className="flex flex-wrap justify-center gap-6 ">
        <img src={item1} alt="riot games" width={800} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
        <img src={item2} alt="riot games" width={800} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
        <img src={item3} alt="riot games" width={800} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
        <img src={item1} alt="riot games" width={800} className=" cursor-pointer hover:outline outline-4 outline-white rounded-md"/>
      </div>
    </div>
  );   
};

export default Games;

import React from "react";
import BannerImage from "../assets/BannerImage.png";
import RunnetIconCircle from "../assets/RunnetIconCircle.png";
import RiotIconCircle from "../assets/RiotIconCircle.png";
import Warnet from "../assets/Warnet.png";

const WhatNew = () => {
  return (
    <div className="relative w-full mt-[159px] py-24 gap-2 bg-black text-white flex items-center flex-col">
      <div className="absolute w-[600px] h-[600px] bg-red-700 rounded-full blur-3xl opacity-20 mt-16"></div>
      <div className="flex flex-row gap-6 z-10">
        <div className="font-bold w-[780px]">
          <h1 className="text-5xl font-bold py-6">Whats Happening?</h1>
          <img
            src={BannerImage}
            alt="Riot News"
            width={780}
            className="rounded cursor-pointer hover:-translate-y-1"
            
          />
          <h2 className="text-3xl">
            Unstoppable (burnboy ft. NEONI) | Welcome to Runeterror Cinematic...
          </h2>
          <div className="flex flex-row gap-2">
            <img src={RunnetIconCircle} alt="icon" width={32} />
            <h2>NEWS</h2>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mt-[95px]">
          <div className="flex flex-row bg-[#656462a0] w-[565px] h-[149px] text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1">
            <div className="p-3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and
                skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img src={Warnet} alt="" className="h-[149px] w-[261px]" />
          </div>
          <div className="flex flex-row bg-[#656462a0] w-[565px] h-[149px] text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1">
            <div className="p-3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and
                skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img src={Warnet} alt="" className="h-[149px] w-[261px]" />
          </div>
          <div className="flex flex-row bg-[#656462a0] w-[565px] h-[149px] text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1">
            <div className="p-3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and
                skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img src={Warnet} alt="" className="h-[149px] w-[261px]" />
          </div>
          <div className="flex flex-row bg-[#656462a0] w-[565px] h-[149px] text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1">
            <div className="p-3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and
                skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img src={Warnet} alt="" className="h-[149px] w-[261px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;

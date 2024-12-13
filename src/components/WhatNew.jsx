import React from "react";
import BannerImage from "../assets/BannerImage.png";
import RunnetIconCircle from "../assets/RunnetIconCircle.png";
import RiotIconCircle from "../assets/RiotIconCircle.png";
import Warnet from "../assets/Warnet.png";

const WhatNew = () => {
  return (
    <div className="relative w-full py-2 gap-2 bg-black text-white flex items-center justify-center flex-col overflow-x-hidden">
      <div className="absolute w-[600px] h-[600px] bg-red-700 rounded-full blur-3xl opacity-20 mt-16"></div>

      <div className="flex flex-col sm:flex-row gap-6 z-10 w-full max-w-screen-lg px-4">
        <div className="font-bold w-full sm:w-[780px]">
          <h1 className="text-4xl sm:text-5xl font-bold py-6 whitespace-nowrap text-center max-hp:text-left max-hp:text-2xl">
            What's Happening?
          </h1>
          <img
            src={BannerImage}
            alt="Riot News"
            className="rounded cursor-pointer hover:-translate-y-1 w-full sm:w-[1000px] md:w-[1200px] max-w-full"
          />

          <h2 className="text-2xl sm:text-3xl text-center sm:text-left py-4">
            Unstoppable (burnboy ft. NEONI) | Welcome to Runeterror Cinematic...
          </h2>
          <div className="flex flex-row justify-center sm:justify-start gap-2">
            <img src={RunnetIconCircle} alt="icon" width={32} />
            <h2>NEWS</h2>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 mt-8 sm:mt-[95px] w-full">
          {/* News Card 1 */}
          <div className="flex flex-row bg-[#656462a0] w-full sm:w-[565px] h-[149px] text-[16px] sm:text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1 mb-4">
            <div className="p-3 w-full sm:w-2/3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img
              src={Warnet}
              alt=""
              className="h-[149px] w-[261px] hidden sm:block"
            />
          </div>

          {/* News Card 2 */}
          <div className="flex flex-row bg-[#656462a0] w-full sm:w-[565px] h-[149px] text-[16px] sm:text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1 mb-4">
            <div className="p-3 w-full sm:w-2/3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img
              src={Warnet}
              alt=""
              className="h-[149px] w-[261px] hidden sm:block"
            />
          </div>

          {/* News Card 3 */}
          <div className="flex flex-row bg-[#656462a0] w-full sm:w-[565px] h-[149px] text-[16px] sm:text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1 mb-4">
            <div className="p-3 w-full sm:w-2/3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img
              src={Warnet}
              alt=""
              className="h-[149px] w-[261px] hidden sm:block"
            />
          </div>

          {/* News Card 4 */}
          <div className="flex flex-row bg-[#656462a0] w-full sm:w-[565px] h-[149px] text-[16px] sm:text-[18px] font-bold rounded-lg cursor-pointer hover:-translate-y-1 mb-4">
            <div className="p-3 w-full sm:w-2/3">
              <h2>
                Riot Tech Interns 2024 Part 2: Aurora, VAL on Console, and skin...
              </h2>
              <div className="flex flex-row gap-2 pt-2">
                <img src={RiotIconCircle} alt="icon" width={32} />
                <h2 color="[#656462]">NEWS</h2>
              </div>
            </div>
            <img
              src={Warnet}
              alt=""
              className="h-[149px] w-[261px] hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;

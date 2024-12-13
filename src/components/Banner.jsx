import React from "react";
import BannerImage from "../assets/BannerImage.png";
import RuneterraLogo from "../assets/RuneterraLogo.png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-black">
      <div
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
        className="h-screen w-full bg-cover bg-center max-hp:h-[450px]"
      ></div>
      <div>
        <div className="absolute flex justify-start flex-col top-48 text-white ml-12 w-[464px] z-10 max-hp:top-20 max-hp:w-[150px]">
          <div className="flex justify-center items-center py-4 max-hp:w-[100%]">
            <img src={RuneterraLogo} alt="Riot" />
          </div>
          <div className="py-1 max-hp:w-[100%]">
            <h1 className="text-center text-3xl font-bold py-4 max-hp:text-sm max-sm:text-xs">
              Welcome To Runeterra
            </h1>
            <p className="text-center text-[#f9f9f99f] max-hp:text-xs max-sm:text-xs">
              Fiddlesticks and Evelynn fuel your nightmares in LoR's scariest
            </p>
            <p className="text-center text-[#f9f9f99f] max-hp:text-xs max-sm:text-xs max-hp:hidden">
              patch yet, Welcome to Runeterror, live on October 9.
            </p>
          </div>
          <div className="py-4 flex justify-center items-center cursor-pointer ">
            <div className="flex flex-row bg-gradient-to-tl from-[#FF7D66] to-[#FF3342] w-[50%] rounded-3xl cursor-pointer hover:bg-[#FF7D66] max-hp:w-[70%]">
              <div className="flex my-[5px] items-center justify-center ml-3 bg-black w-[48px] h-[48px] rounded-full max-hp:h-[25px] max-hp:w-[25px] max-hp:my-[6px]">
                <FaArrowRight className="" />
              </div>
              <h1 className="flex pl-3 mt-[5px] text-3xl text-white font-bold max-hp:text-[10px]">
                Play Now
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

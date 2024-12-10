import React from "react";
import BannerImage from "../assets/BannerImage.png";
import RuneterraLogo from "../assets/RuneterraLogo.png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-black">
      <div className="absolute w-[100%] h-[600px] top-0 ">
        <img src={BannerImage} alt="Riot" />
      </div>

      <div>
        <div className="relative flex justify-start flex-col mt-[150px] text-white ml-12 w-[464px]">
          <div className="flex justify-center items-center py-4">
            <img src={RuneterraLogo} alt="Riot" />
          </div>
          <div className="py-4">
            <h1 className="text-center text-3xl font-bold py-4">
              Welcome To Runeterra
            </h1>
            <p className="text-center text-[#f9f9f99f]">
              Fiddlesticks and Evelynn fuel your nightmares in LoR's scariest
            </p>
            <p className="text-center text-[#f9f9f99f]">
              patch yet, Welcome to Runeterror, live on October 9.
            </p>
          </div>

          <div className="py-4 flex justify-center items-center cursor-pointer">
            <div className="flex flex-row bg-gradient-to-tl from-[#FF7D66] to-[#FF3342] w-[244px] h-[72px] rounded-3xl cursor-pointer hover:bg-[#FF7D66] ">
              <div className="flex mt-3 items-center justify-center ml-3 bg-black w-[48px] h-[48px] rounded-full ">
                <FaArrowRight className="" />
              </div>
              <h1 className="flex pl-3 mt-[15px] text-3xl text-white font-bold">
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

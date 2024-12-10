import React, { useEffect, useState } from "react";
import logoriotgames from "../assets/riotgames.png";
import { SiRiotgames } from "react-icons/si";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiGlobeBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { Button } from "flowbite-react";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center fixed top-0  w-full h-[80px] text-white p-5 z-50 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="flex flex-row p-5 gap-9  text-l ">
        <div className="flex flex-row gap-3">
          <div className="pt-1 hover:scale-125">
            <img src={logoriotgames} alt="" width={"80"} />
          </div>
          <div className="pl-5 pt-1 hover:scale-125">
            <SiRiotgames />
          </div>
        </div>

        <div className="flex flex-row justify-center font-medium cursor-pointer hover:underline decoration-2 decoration-red-600 underline-offset-[20px] hover:bg-[#575757] hover:rounded w-[115px]">
          <h1>Tentang kami</h1>
        </div>
        <div className="flex flex-row justify-center font-medium cursor-pointer hover:underline decoration-2 decoration-red-600 underline-offset-[20px] hover:bg-[#575757] hover:rounded w-[70px]">
          <h1>Berita </h1>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-center">
        <PiGlobeBold className="mt-1 ml-1 hover:bg-[#575757] hover:rounded" />
        <Button
          pill
          className=" bg-[#D13639] w-[80px] flex justify-center rounded hover:bg-[#822122]"
        >
          Masuk
        </Button>
      </div>
    </div>
  );
};

export default Header;

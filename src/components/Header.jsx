import React, { useEffect, useState } from "react";
import logoriotgames from "../assets/riotgames.png";
import { SiRiotgames } from "react-icons/si";
import { PiGlobeBold } from "react-icons/pi";
import { Button } from "flowbite-react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

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
    <div
      className={`flex justify-between items-center fixed top-0 w-full h-[80px] text-white p-5 z-50 ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
    
      <div className="flex flex-row p-5 gap-9 text-l">
        <div className="flex flex-row gap-3">
          <div className="pt-1 hover:scale-125">
            <img src={logoriotgames} alt="Logo" width={"80"} />
          </div>
          <div className="pl-5 pt-1 hover:scale-125">
            <SiRiotgames />
          </div>
        </div>
        <div className="hidden lg:flex gap-5">
          <div className="flex flex-row justify-center font-medium cursor-pointer hover:underline decoration-2 decoration-red-600 underline-offset-[20px] hover:bg-[#575757] hover:rounded w-[115px]">
            <h1>Tentang Kami</h1>
          </div>
          <div className="flex flex-row justify-center font-medium cursor-pointer hover:underline decoration-2 decoration-red-600 underline-offset-[20px] hover:bg-[#575757] hover:rounded w-[70px]">
            <h1>Berita</h1>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center gap-5">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <AiOutlineClose className="text-white text-3xl" />
          ) : (
            <AiOutlineMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
      <div className="hidden lg:flex flex-row gap-5 justify-center">
        <PiGlobeBold className="mt-1 ml-1 hover:bg-[#575757] hover:rounded" />
        <Button pill className="bg-[#D13639] w-[80px] flex justify-center rounded hover:bg-[#822122]">
          Masuk
        </Button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-black text-white p-5 flex flex-col items-center gap-4">
          <div className="cursor-pointer hover:bg-[#575757] w-full text-center py-2 rounded">
            <h1>Tentang Kami</h1>
          </div>
          <div className="cursor-pointer hover:bg-[#575757] w-full text-center py-2 rounded">
            <h1>Berita</h1>
          </div>
          <div className="cursor-pointer hover:bg-[#575757] w-full text-center py-2 rounded">
            <PiGlobeBold className="inline-block mr-2" />
          </div>
          <Button pill className="bg-[#D13639] w-full flex justify-center rounded hover:bg-[#822122]">
            Masuk
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;

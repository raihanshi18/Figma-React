import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import { SiRiotgames } from "react-icons/si";

const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8 p-9 ">
          <SiRiotgames className="cursor-pointer hover:scale-150 hover:text-red-600"/>
          <h1 className="cursor-pointer hover:underline underline-offset-8">Lorem</h1>
          <h1 className="cursor-pointer hover:underline underline-offset-8">Lorem</h1>
          <h1 className="cursor-pointer hover:underline underline-offset-8">Lorem</h1>
          <h1 className="cursor-pointer hover:underline underline-offset-8">Lorem</h1>
          <h1 className="cursor-pointer hover:underline underline-offset-8">Lorem</h1>
        </div>
        <div className="flex flex-row gap-8 p-9 ">
          <FaXTwitter className="cursor-pointer hover:text-red-600"/>
          <FiInstagram className="cursor-pointer hover:text-red-600"/>
          <FaFacebookF className="cursor-pointer hover:text-red-600"/>
          <FaYoutube className="cursor-pointer hover:text-red-600"/>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-[95%] h-[1px] bg-slate-500 mx-3"></div>
      </div>
      <div className="flex flex-row justify-between p-9">
        <h1>© 2024 Riot Games, Inc. Kembali ke Atas.</h1>
        <h1 className="flex flex-row cursor-pointer ">
          KEMBALI KE ATAS <IoMdArrowDropup className="hover:text-red-600"/>
        </h1>
      </div>
    </div>
  );
};

export default Footer;

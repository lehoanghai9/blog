import React from "react";
import logo from "../../assets/icons/logo.svg";
import home from "../../assets/icons/home.svg";
import portfolio from "../../assets/icons/portfolio.svg";
import send from "../../assets/icons/send.svg";
import moon from "../../assets/icons/moon.svg";
import { useNavigate } from "react-router-dom";

function NavBar({toggle}) {
  const navigate = useNavigate()
  return (
    <nav className="fromWtoB fixed items-center sm:w-[80px] lg:w-[100px] inset-0 h-16 sm:h-screen flex sm:flex-col sm:py-10 py-4 px-5 sm:px-0 sm:items-center justify-between border border-black border-opacity-[10%] shadow">
      <img src={logo} className="w-8 h-8  sm:w-10 sm:h-10 cursor-pointer " alt="logo"/>
      <div className="hidden sm:flex flex-col gap-8 items-center">
        <div className="hover:bg-[#cecece] rounded-full p-1 duration-200">
          <img src={home} className="w-7 h-7 cursor-pointer " alt="home" onClick={() => {navigate("/")}} />
        </div>
        <div className="flex justify-center items-center hover:bg-[#cecece] rounded-full p-2 duration-200">
          <img src={portfolio} className="w-6 h-6 cursor-pointer" alt="portfolio"/>
        </div>
        <div className=" flex justify-center items-center  hover:bg-[#cecece] rounded-full p-1 duration-200">
          <img src={send} className=" w-7 h-7 cursor-pointer" alt="send"/>
        </div>
        
      </div>
      <img src={moon} onClick={toggle} className="w-7 h-7 cursor-pointer" alt="viewmode toggle"/>
    </nav>
  );
}

export default NavBar;

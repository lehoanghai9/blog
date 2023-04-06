import React from "react";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";
import email from "../../assets/icons/email.svg";

function SideBar() {
  return (
    <div className="fromWtoB hidden lg:flex flex-col fixed right-0 top-0 w-[350px] p-10 border border-black border-opacity-[10%] h-screen justify-between shadow">
      <div>
        <h1 className="font-Inter font-bold">Témák</h1>
        <div className="font-Inter flex flex-wrap gap-2 select-none mt-3 text-[14px]">
          <span className="bg-[#F5F5F5] rounded-full py-2 px-3 cursor-pointer">
            Technológia
          </span>
          <span className="bg-[#F5F5F5] rounded-full py-2 px-3 cursor-pointer">
            Fejlesztés
          </span>
          <span className="bg-[#F5F5F5] rounded-full py-2 px-3 cursor-pointer">
            Data Science
          </span>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <h1 className="font-Inter font-bold">Iratkozz fel!</h1>
          <p className="font-Inter text-[14px] text-black/60">
            Iratkozz fel hírlevelemre, ha érdekelnek a webfejlesztésről szóló
            cikkeim, és szívesen olvasád .....
          </p>
          <input
            className="px-3 w-full h-[44px] text-[14px] font-Inter bg-[#F5F5F5] rounded-[8px]"
            placeholder="Email..."
          ></input>
          <button className="bg-black rounded-[8px] w-full h-[44px] justify-center items-center font-Inter text-white font-bold text-[14px] hover:bg-black/70 duration-200">
            Feliratkozás
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <div className=" flex justify-center items-center  hover:bg-[#cecece] rounded-full p-1 duration-200">
            <img
              src={linkedin}
              className="w-7 h-7 cursor-pointer"
              alt="lindekin"
            ></img>
          </div>
          <div className=" flex justify-center items-center  hover:bg-[#cecece] rounded-full p-1 duration-200">
            <img
              src={twitter}
              className="w-7 h-7 cursor-pointer"
              alt="twitter"
            ></img>
          </div>
          <div className=" flex justify-center items-center  hover:bg-[#cecece] rounded-full p-1 duration-200">
            <img
              src={github}
              className="w-7 h-7 cursor-pointer"
              alt="github"
            ></img>
          </div>

          <div className=" flex justify-center items-center  hover:bg-[#cecece] rounded-full p-1 duration-200">
            <img
              src={email}
              className="w-7 h-7 cursor-pointer"
              alt="email"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

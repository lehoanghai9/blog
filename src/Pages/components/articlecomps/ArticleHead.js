import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function ArticleHead({ title, date, mins }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="mb-12">
      <div
        className={`back cursor-pointer w-[85px] mb-5 text-[#00000083] ${hovered && "text-[#000000]"} duration-300 flex justify-between items-center`}
        onClick={() => {
          navigate("/");
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <Arrow className={`backicon w-[20px] duration-300 h-[20px] ${hovered && "stroke-[#000000] -translate-x-2"} stroke-[#00000083] `}></Arrow>
        <h3>Főoldal</h3>
      </div>
      <h1 className="text-[32px] sm:text-[36px] font-Inter font-bold">
        {title}
      </h1>
      <div className="mt-5 bg-[#f5f5f5] w-[280px] py-1 rounded-[8px] flex justify-center items-center">
        <h3 className="text-[14px]">{date} / {mins} perc olvasás </h3>
      </div>
      
    </div>
  );
}

export default ArticleHead;

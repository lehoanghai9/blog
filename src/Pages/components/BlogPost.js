import React from "react";
import { useNavigate } from "react-router-dom";

function BlogPost({ title, subtitle, date, categories, minutes, pic, id }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6  border-b-[1px] py-10 ">
      <div className="flex justify-between items-center text-[14px] font-Inter text-black/60">
        <div className="flex gap-3">
          <h1>{minutes} perc olvasás</h1>
          <span className="-mt-1 select-none font-medium">.</span>
          <h1>{date}</h1>
        </div>

        {categories && categories.map((category) => {
          return (
            <div className="justify-self-end bg-[#F5F5F5] rounded-full py-2 px-3 cursor-pointer text-[12px] text-black">
              {category}
            </div>
          );
        })}
      </div>
      <div className="flex-col sm:flex-row flex gap-8">
        <img
          src={pic}
          className="rounded-[8px] sm:w-[250px] max-h-[300px] aspect-auto border border-black/30 cursor-pointer"
          alt="blog illustration "
          onClick={() => {
            navigate(`article/${id}`);
          }}
        ></img>
        <div className="">
          <h1
            className="font-Inter font-bold text-[20px] cursor-pointer hover:text-black/50 duration-200"
            onClick={() => {
              navigate(`article/${id}`);
            }}
          >
            {title}{" "}
          </h1>

          <p className="text-black/70 mt-3">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

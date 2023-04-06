import React from "react";

function ArticleProgress({ titles }) {
  const handleClick = (index) => {
    const h2Tags = document.querySelectorAll("h2");
    const selectedH2Tag = h2Tags[index];
    selectedH2Tag.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[200px] gap-6 text-[14px] mb-12 text-[#0000005a] flex-col fixed right-0 bottom-0 hidden xl:flex">
      {titles.map((title, index) => {
        return (
          <div key={title} className="cursor-pointer" onClick={() => handleClick(index)}>
            {title}
          </div>
        );
      })}
    </div>
  );
}

export default ArticleProgress;
import React, { useState } from "react";
import BlogContent from "./components/articlecomps/BlogContent";
import ArticleProgress from "./components/ArticleProgress";

function BlogArticle() {
  const [titles, setTitles] = useState([])
  return (
    <div className="w-screen flex justify-center sm:px-[80px] lg:px-[100px] pt-40 pb-24 sm:pt-32">
      <BlogContent setTitles={setTitles}/>
      <ArticleProgress titles={titles}/>
    </div>
  );
}

export default BlogArticle;

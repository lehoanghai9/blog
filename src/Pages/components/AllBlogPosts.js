import React from "react";
import BlogPost from "./BlogPost";
import blog1 from "../../assets/blogpics/headerpics/blog1.jpg";
import blog2 from "../../assets/blogpics/headerpics/blog2.jpg";

function AllBlogPosts() {
  return (
    <div className="w-full sm:pl-[80px] lg:pl-[100px] lg:pr-[350px] ">
      <div className="sm:mx-10 mx-5 mb-14 lg:mr-24">
        <BlogPost
          subtitle={
            "A nagy adat (Big Data) az elmúlt években körvonalazódó fogalom lett a vállalati szektorban. Az információk hatalmas mennyiségeit jelenti, amelyeket a cégek a sikerük érdekében gyűjtenek és elemznek."
          }
          title={
            "A nagy adat ereje: Hogyan használják az információkat a cégek a sikerhez"
          }
          date={"2023. Ápr. 03."}
          minutes={5}
          pic={blog1}
          id={"firstblog"}
          categories={["Data Science", ]}
        />
        <BlogPost
          subtitle={
            "Az M1 chip az Apple egyik legújabb innovációja, amely nagy előrelépést jelent a Mac számítógépek terén."
          }
          title={
            "Az M1 Apple chip: A Mac új generációja"
          }
          date={"2023. Márc. 25."}
          minutes={8}
          pic={blog2}
          id={"secondblog"}
          categories={["Technológia", ]}
        />
      </div>
    </div>
  );
}

export default AllBlogPosts;

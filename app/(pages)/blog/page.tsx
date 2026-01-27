import BlogList from "@/components/section/BlogList";
import BlogHeader from "@/components/alt_page/BlogHeader";
import React from "react";

const BlogPage = () => {
  return (
    <div className="bg-[#F8F0E5] w-full h-full pb-40 gap-48 md:gap-32 flex flex-col px-8 md:px-20">
      <BlogHeader />
      <BlogList />
    </div>
  );
};

export default BlogPage;
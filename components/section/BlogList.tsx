"use client";
import Link from "next/link";
import React from "react";
import GetSanityBlogPosts from "@/hooks/GetSanityBlogPosts";

export default function BlogList() {
  const blogPosts = GetSanityBlogPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      className="flex flex-col lg:flex-row w-full gap-8 py-24 scroll-mt-20"
      id="blog"
    >
      <div className="text-lg font-medium text-gray-500 lg:w-1/5 xl:w-1/5 sticky top-24">
        Write by me
      </div>
      <div className="lg:w-4/5 xl:w-3/5 flex flex-col">
        {blogPosts.length === 0 ? (
          <p className="text-gray-500">No blog posts yet.</p>
        ) : (
          blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="group"
            >
              <p className="text-gray-500 font-semibold text-sm mb-2 md:mb-0 group-hover:text-gray-700 transition-colors">
                {formatDate(post.date)}
              </p>
              <p className="leading-relaxed text-2xl lg:leading-normal lg:text-3xl font-medium text-gray-800 flex flex-col group-hover:text-gray-900 transition-colors">
                {post.title}
                <span className="text-lg font-medium text-gray-500 mt-2">
                  {post.excerpt}
                </span>
              </p>
              <hr className="border-t border w-full border-gray-400 mt-8 last:hidden" />
            </Link>
          ))
        )}
      </div>
      <div className="hidden xl:flex lg:w-1/5"></div>
    </div>
  );
}
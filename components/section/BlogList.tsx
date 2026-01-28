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
    <div className="flex flex-col lg:flex-row w-full gap-8" id="blog">
      <div className="hidden lg:block text-lg font-medium text-gray-500 lg:w-1/5 xl:w-1/5 lg:sticky lg:top-24 lg:self-start">
        Write by me
      </div>
      <div className="lg:w-4/5 xl:w-4/5">
        {blogPosts.length === 0 ? (
          <p className="text-gray-500 text-center py-20">No blog posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group flex flex-col h-full"
              >
                <article className="flex flex-col h-full p-6 rounded-2xl border border-gray-400 hover:border-gray-900 hover:bg-gray-900 transition-all duration-300 ease-out relative overflow-hidden group-hover:shadow-2xl">
                  
                  {/* Date Badge */}
                  <div className="mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500 group-hover:text-gray-400 transition-colors">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-white transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-base text-gray-600 leading-relaxed mb-8 line-clamp-3 flex-grow group-hover:text-gray-300 transition-colors">
                    {post.excerpt}
                  </p>

                  {/* Read More Action */}
                  <div className="flex items-center text-sm font-bold text-gray-900 mt-auto group-hover:text-white transition-colors">
                    <span className="relative">
                      Read Article
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:bg-white transition-all group-hover:w-full duration-300"></span>
                    </span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
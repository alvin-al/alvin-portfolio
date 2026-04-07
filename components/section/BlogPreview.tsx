import Link from "next/link";
import React from "react";
import RoundedButton from "../element/RoundedButton";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  id: string;
}

interface BlogPreviewProps {
  blogPosts: BlogPost[];
}

export default function BlogPreview({ blogPosts }: BlogPreviewProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (blogPosts.length === 0) {
    return (
      <div id="blog" className="scroll-mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Blog
        </h2>
        <p className="text-gray-500 text-center py-20">No blog posts yet.</p>
      </div>
    );
  }

  return (
    <div id="blog" className="scroll-mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group flex flex-col"
          >
            <div className="mb-2">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                {formatDate(post.date)}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/blog">
          <RoundedButton>View All Blogs</RoundedButton>
        </Link>
      </div>
    </div>
  );
}
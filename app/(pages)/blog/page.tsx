import BlogList from "@/components/section/BlogList";
import Entrance from "@/components/ui/Entrance";
import React from "react";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Alvin Al",
  description: "Thoughts, tutorials, and insights on web development, design, and technology by Alvin Al.",
  keywords: [
    "Web Developer Blog",
    "Web Development Tutorial",
    "Next.js Tutorial",
    "React Tutorial",
    "Web Development Blog Indonesia",
  ],
  openGraph: {
    title: "Blog | Alvin Al",
    description: "Thoughts, tutorials, and insights on web development, design, and technology by Alvin Al.",
    url: "https://alvinxal.my.id/blog",
    siteName: "Alvin Al Portfolio",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://alvinxal.my.id/blog",
  },
};

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  id: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;

  const posts = await client.fetch<any[]>(query, {}, { next: { revalidate: 3600 } });

  const mappedPosts = posts.map((post) => {
    let excerpt = "No excerpt available";
    if (post.body && Array.isArray(post.body)) {
      const firstBlock = post.body.find((block: any) => block._type === "block" && block.children?.[0]?.text);
      if (firstBlock?.children?.[0]?.text) {
        excerpt = firstBlock.children[0].text;
        if (excerpt.length > 150) {
          excerpt = excerpt.substring(0, 150) + "...";
        }
      }
    }

    return {
      title: post.title,
      slug: post.slug?.current || "",
      date: post.publishedAt || new Date().toISOString(),
      excerpt: excerpt,
      id: post._id,
    };
  });

  return mappedPosts;
}

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://alvinxal.my.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://alvinxal.my.id/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#F8F0E5] w-full h-full flex flex-col px-8 md:px-20 pb-20">
      <Entrance>
        <div className='w-full pt-10 pb-16 md:pt-12 md:pb-20'>
          <h1 className='text-5xl xl:text-[60px] leading-snug font-medium mb-6'>
            Blog
          </h1>
          <p className='text-lg font-medium text-gray-600 max-w-2xl'>
            Thoughts, tutorials, and insights on web development, design, and technology. Sharing what I learn along the way.
          </p>
        </div>
      </Entrance>

      <Entrance>
        <BlogList blogPosts={blogPosts} />
      </Entrance>
    </div>
    </>
  );
};

export default BlogPage;
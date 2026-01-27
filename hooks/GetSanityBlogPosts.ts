import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: any;
  id: string;
}

export default function GetSanityBlogPosts() {
  const [entries, setEntries] = useState<BlogPost[]>([]);

  useEffect(() => {
    const query = `*[_type == "post" && categories[]->title match "Blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      body
    }`;

    client
      .fetch(query)
      .then((posts) => {
        const mappedEntries = posts.map((post: any) => {
          const excerpt = post.body?.find((block: any) => block._type === "block" && block.children?.[0]?.text)
            ?.children?.[0]?.text || "";

          return {
            title: post.title,
            slug: post.slug.current,
            date: post.publishedAt,
            excerpt: excerpt.length > 150 ? excerpt.substring(0, 150) + "..." : excerpt,
            content: post.body,
            id: post._id,
          };
        });
        setEntries(mappedEntries);
      })
      .catch(console.error);
  }, []);

  return entries;
}

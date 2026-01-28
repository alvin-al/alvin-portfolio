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
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      body,
      categories
    }`;

    client
      .fetch(query)
      .then((posts) => {
        console.log('Raw posts from Sanity:', posts);
        const mappedEntries = posts.map((post: any) => {
          // Handle case where body is null or empty
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
            slug: post.slug?.current || '',
            date: post.publishedAt || new Date().toISOString(), // Use current date if publishedAt is null
            excerpt: excerpt,
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

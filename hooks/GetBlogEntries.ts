import client from "@/utils/contentfulClient";
import { useState, useEffect } from "react";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: any;
  id: string;
}

export default function GetBlogEntries() {
  const [entries, setEntries] = useState<BlogPost[]>([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        const mappedEntries = response.items.map((item: any) => ({
          title: item.fields.title,
          slug: item.fields.slug,
          date: item.fields.date,
          excerpt: item.fields.excerpt || "",
          content: item.fields.content,
          id: item.sys.id,
        }));
        setEntries(mappedEntries);
      })
      .catch(console.error);
  }, []);

  return entries;
}
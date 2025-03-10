import client from "@/utils/contentfulClient";
import { useState, useEffect } from "react";

interface Project {
  mainImage: string;
  title: string;
  slug: string;
  id: string;
  websiteLink: string;
  titleDescription: string;
}

export default function GetEntriesContentful() {
  const [entries, setEntries] = useState<Project[]>([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        const mappedEntries = response.items.map((item: any) => ({
          mainImage: "http:" + item.fields.mainImage.fields.file.url,
          title: item.fields.title,
          slug: item.fields.slug,
          id: item.sys.id,
          websiteLink: item.fields.websiteLink,
          titleDescription: item.fields.titleDescription,
        }));
        setEntries(mappedEntries);
      })
      .catch(console.error);
  }, []);

  return entries;
}

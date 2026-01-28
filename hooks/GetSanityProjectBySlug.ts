
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";

export interface ProjectDetail {
  _id: string;
  title: string;
  titleDescription: string;
  slug: { current: string };
  mainImage: any;
  websiteLink: string;
  techStack: string[];
  content: PortableTextBlock[]; // Adjust based on your schema for block content
  date: string;
}

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default function GetSanityProjectBySlug(slug: string) {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // Adjust query based on actual schema fields. 
    // Assuming 'projectContent' or 'content' is the field name for body text.
    // Assuming 'techStack' is an array of strings.
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      titleDescription,
      slug,
      mainImage {
        asset,
        alt
      },
      websiteLink,
      "techStack": technologies,
      "content": description,
      date
    }`;

    setLoading(true);
    client
      .fetch(query, { slug })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error);
        setLoading(false);
      });
  }, [slug]);

  return { project, loading };
}

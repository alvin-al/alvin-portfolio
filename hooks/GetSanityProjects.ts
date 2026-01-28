import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Project {
  mainImage: string;
  title: string;
  slug: string;
  id: string;
  websiteLink: string;
  titleDescription: string;
}

// Initialize image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default function GetSanityProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "project"] | order(date desc) {
      _id,
      title,
      slug,
      mainImage,
      websiteLink,
      titleDescription
    }`;

    client
      .fetch(query)
      .then((sanityProjects: any[]) => {
        const mappedProjects = sanityProjects.map((project) => {
          let imageUrl = "";
          if (project.mainImage?.asset?._ref) {
            imageUrl = urlFor(project.mainImage).width(1200).height(675).url() || "";
          }

          return {
            mainImage: imageUrl,
            title: project.title,
            slug: project.slug?.current || "",
            id: project._id,
            websiteLink: project.websiteLink,
            titleDescription: project.titleDescription,
          };
        });
        setProjects(mappedProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error);
        setLoading(false);
      });
  }, []);

  return projects;
}
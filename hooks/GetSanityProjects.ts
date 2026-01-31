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
        const desiredOrder = ["flaat studio", "vyan abimanyu", "erp system internal"];
        
        mappedProjects.sort((a, b) => {
          const aTitle = a.title.toLowerCase();
          const bTitle = b.title.toLowerCase();
          
          const indexA = desiredOrder.findIndex(order => aTitle.includes(order));
          const indexB = desiredOrder.findIndex(order => bTitle.includes(order));
          
          if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
          }
          
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;
          
          return 0;
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
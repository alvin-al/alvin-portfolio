import ProjectList from "@/components/section/ProjectList";
import Entrance from "@/components/ui/Entrance";
import React from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Alvin Al",
  description: "A collection of web development projects by Alvin Al, featuring Next.js, React, and minimalist design solutions.",
  keywords: [
    "Web Developer Portfolio",
    "Next.js Projects",
    "React Projects",
    "Web Development Portfolio",
    "Minimalist Web Design",
  ],
  openGraph: {
    title: "Projects | Alvin Al",
    description: "A collection of web development projects by Alvin Al, featuring Next.js, React, and minimalist design solutions.",
    url: "https://alvinxal.my.id/projects",
    siteName: "Alvin Al Portfolio",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://alvinxal.my.id/projects",
  },
};

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface Project {
  mainImage: string;
  title: string;
  slug: string;
  id: string;
  websiteLink: string;
  titleDescription: string;
}

async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(date desc) {
    _id,
    title,
    slug,
    mainImage,
    websiteLink,
    titleDescription
  }`;

  const sanityProjects = await client.fetch<any[]>(query, {}, { next: { revalidate: 3600 } });

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

  return mappedProjects;
}

const ProjectsPage = async () => {
  const projects = await getProjects();

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
        name: "Projects",
        item: "https://alvinxal.my.id/projects",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='bg-[#F8F0E5] w-full h-full flex flex-col px-8 md:px-20 pb-20'>
      <Entrance>
        <div className='w-full pt-10 pb-16 md:pt-12 md:pb-20'>
          <h1 className='text-5xl xl:text-[60px] leading-snug font-medium mb-6'>
            Projects
          </h1>
          <p className='text-lg font-medium text-gray-600 max-w-2xl'>
            A collection of my work showcasing web development projects, from concept to deployment. Each project represents a unique challenge and creative solution.
          </p>
        </div>
      </Entrance>

      <Entrance>
        <ProjectList projects={projects} />
      </Entrance>
    </div>
    </>
  );
};

export default ProjectsPage;
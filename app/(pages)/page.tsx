import Work from "@/components/section/Work";
import HeroBanner from "@/components/alt_page/HeroBanner";
import React from "react";
import AboutMeShort from "@/components/section/AboutMeShort";
import Contact from "@/components/section/Contact";
import BlogPreview from "@/components/section/BlogPreview";
import Entrance from "@/components/ui/Entrance";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alvin Al - Web Developer Portfolio",
  description: "Portfolio of Alvin Al, a Web Developer specializing in Next.js, React, and minimalist design. View my projects and contact me.",
  keywords: [
    "Alvin Al",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Minimalist Web Design",
    "Tailwind CSS",
    "TypeScript Developer",
  ],
  openGraph: {
    title: "Alvin Al - Web Developer Portfolio",
    description: "Explore the portfolio of Alvin Al, featuring minimalist and effective web development projects.",
    url: "https://alvinxal.my.id",
    siteName: "Alvin Al Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Al - Web Developer Portfolio",
    description: "Explore the portfolio of Alvin Al, featuring minimalist and effective web development projects.",
  },
  alternates: {
    canonical: "https://alvinxal.my.id",
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

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  id: string;
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

export default async function Page() {
  const projects = await getProjects();
  const blogPosts = await getBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alvin Al Portfolio",
    url: "https://alvinxal.my.id",
    publisher: {
      "@type": "Person",
      name: "Alvin Al",
      url: "https://alvinxal.my.id",
    },
  };

  return(
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='bg-[#F8F0E5] w-full h-full gap-48 md:gap-32 flex flex-col px-8 md:px-20'>
        <Entrance>
        <HeroBanner />
      </Entrance>
      <Entrance>
        <AboutMeShort />
      </Entrance>
      <Entrance>
        <Work projects={projects} />
      </Entrance>
      <Entrance>
        <BlogPreview blogPosts={blogPosts} />
      </Entrance>
<div className="pb-48">
          <Entrance>
            <Contact />
          </Entrance>
        </div>
      </div>
    </>
  );
}
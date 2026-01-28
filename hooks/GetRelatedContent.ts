import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export interface RelatedProject {
  id: string;
  title: string;
  slug: string;
  mainImage: string;
  titleDescription?: string;
}

export interface RelatedBlog {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export async function getRelatedProjects(currentId: string): Promise<RelatedProject[]> {
  const query = groq`*[_type == "project" && _id != $currentId] | order(date desc) [0...2] {
    _id,
    title,
    slug,
    mainImage,
    titleDescription
  }`;
  
  const rawData = await client.fetch(query, { currentId });
  
  return rawData.map((project: any) => ({
    id: project._id,
    title: project.title,
    slug: project.slug?.current || "",
    mainImage: project.mainImage ? urlFor(project.mainImage).width(800).url() : "",
    titleDescription: project.titleDescription || ""
  }));
}

export async function getRelatedBlogs(currentId: string): Promise<RelatedBlog[]> {
  // Query 2 recent posts excluding current
  const query = groq`*[_type == "post" && _id != $currentId] | order(publishedAt desc) [0...2] {
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;

  const rawData = await client.fetch(query, { currentId });
  
  return rawData.map((post: any) => {
    // Basic excerpt from first block of body if available
    let excerpt = "";
    if (post.body && Array.isArray(post.body)) {
      const block = post.body.find((b: any) => b._type === 'block' && b.children);
      if (block) {
        excerpt = block.children.map((c: any) => c.text).join(" ");
      }
    }
    
    return {
      id: post._id,
      title: post.title,
      slug: post.slug?.current || "",
      date: post.publishedAt || "",
      excerpt: excerpt
    };
  });
}

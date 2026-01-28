import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Create image builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  publishedAt: string;
  body: any;
  author?: {
    name: string;
    image?: any;
  };
  categories?: Array<{
    title: string;
  }>;
}

export async function getSanityPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{name, image},
    categories[]->{title}
  }`;

  // Using fetch with Next.js caching strategy could be added here if needed
  // For now using client.fetch
  const post = await client.fetch(query, { slug });
  
  return post;
}

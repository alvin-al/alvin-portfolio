"use client";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PortableText, PortableTextBlock, PortableTextComponents } from "next-sanity";
import { urlFor } from "@/hooks/GetSanityPostBySlug"; // Adjusted hook
import { getVideoEmbedUrl } from "@/utils/videoUtils";
import ImageZoom from "@/components/ui/ImageZoom";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface BlogTextProps {
  content?: PortableTextBlock[];
}

// Custom components for PortableText to render Sanity styling (Reused from ProjectText)
const components: PortableTextComponents = {
  block: {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mb-5 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-8 mb-4 leading-tight">
        {children}
      </h3>
    ),
    // Normal paragraph
    normal: ({ children }) => (
      <p className="text-[18px] md:text-[20px] text-gray-900 leading-[1.6] md:leading-[1.6] mb-8 tracking-[-0.01em]">
        {children}
      </p>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-gray-900 pl-6 py-1 my-10 italic text-2xl md:text-3xl text-gray-800 font-medium leading-tight tracking-tight">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-5 mb-8 space-y-3 text-[18px] md:text-[20px] text-gray-900 leading-[1.6] tracking-[-0.01em] pl-4">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-5 mb-8 space-y-3 text-[18px] md:text-[20px] text-gray-900 leading-[1.6] tracking-[-0.01em] pl-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2">{children}</li>
    ),
    number: ({ children }) => (
      <li className="pl-2">{children}</li>
    ),
  },
  marks: {
    // Strong (bold)
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    // Emphasis (italic)
    em: ({ children }) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    // Code
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-base font-mono">
        {children}
      </code>
    ),
    // Link
    link: ({ children, value }) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline decoration-[1.5px] decoration-gray-400 underline-offset-4 hover:decoration-gray-900 transition-all cursor-pointer"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    // Image type
    image: ({ value }) => {
      if (!value?.asset) return null;
      
      const imageUrl = urlFor(value.asset).width(1200).quality(90).url();
      const alt = value.alt || "Blog image";
      const caption = value.caption;

      return (
        <figure className="my-12">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
            <ImageZoom
              src={imageUrl}
              alt={alt}
              className="w-full h-full"
              imageClassName="object-cover"
            />
          </div>
          {caption && (
            <figcaption className="mt-4 text-center text-sm md:text-base text-gray-500 font-medium tracking-tight">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // Video embed type
    videoEmbed: ({ value }) => {
      if (!value?.url) return null;

      const videoData = getVideoEmbedUrl(value.url);
      if (!videoData) return null;

      const { embedUrl, platform } = videoData;
      const caption = value.caption;

      return (
        <figure className="my-12">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={embedUrl}
              title={caption || `${platform} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          {caption && (
            <figcaption className="mt-4 text-center text-sm md:text-base text-gray-500 font-medium tracking-tight">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

const BlogText = ({ content }: BlogTextProps) => {
  if (!content) return null;

  return (
    <div className={`flex flex-col gap-0 ${plusJakarta.className} w-full md:w-1/2 mx-auto mt-0 mb-20 lg:mb-32`}>
      <PortableText value={content} components={components} />
    </div>
  );
};

export default BlogText;

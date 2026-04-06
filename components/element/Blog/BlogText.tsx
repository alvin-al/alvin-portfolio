"use client";
import React, { useState, useEffect, useRef } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PortableText, PortableTextBlock, PortableTextComponents } from "next-sanity";
import { urlFor } from "@/hooks/GetSanityPostBySlug";
import { getVideoEmbedUrl } from "@/utils/videoUtils";
import ImageZoom from "@/components/ui/ImageZoom";
import CodeBlock from "@/components/ui/CodeBlock";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface BlogTextProps {
  content?: PortableTextBlock[];
}

const BlogImage = ({ value }: { value: any }) => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  if (!value?.asset) return null;

  const imageUrl = urlFor(value.asset).width(1200).quality(90).url();
  const alt = value.alt || "Blog image";
  const caption = value.caption;

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }, [imageUrl]);

  const getStyles = () => {
    if (!dimensions) {
      return {
        containerClass: "w-full aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4",
        imageClass: "object-cover",
        style: {} as React.CSSProperties
      };
    }

    const { width, height } = dimensions;
    const isPortrait = height > width * 1.3;
    const isLandscape = width > height;

    const style: React.CSSProperties = { aspectRatio: `${width} / ${height}` };

    if (isPortrait) {
      return {
        containerClass: "max-w-sm mx-auto shadow-md md:max-w-xs rounded-lg mb-4 overflow-hidden bg-gray-100",
        imageClass: "object-cover",
        style
      };
    } else if (isLandscape) {
      return {
        containerClass: "w-full max-h-[500px] md:max-h-[50vh] rounded-lg my-10 md:my-12 overflow-hidden",
        imageClass: "object-contain",
        style
      };
    } else {
      return {
        containerClass: "max-w-full mb-4 rounded-lg overflow-hidden",
        imageClass: "object-contain",
        style
      };
    }
  };

  const { containerClass, imageClass, style } = getStyles();

  return (
    <figure className="mb-12">
      <div className={`relative ${containerClass}`} style={style}>
        <ImageZoom
          src={imageUrl}
          alt={alt}
          className="w-full h-full"
          imageClassName={`${imageClass} w-full h-full`}
        />
      </div>
      {/* Alt text / Description */}
      <figcaption className={`mt-3 text-center text-sm text-gray-600 italic ${plusJakarta.className}`}>
        {alt}
      </figcaption>
      {/* Caption (if exists) */}
      {caption && (
        <figcaption className={`mt-2 text-center text-sm md:text-base text-gray-700 font-medium tracking-tight ${plusJakarta.className}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 md:mt-12 mb-5 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-10 md:mt-12 mb-4 leading-tight">
        {children}
      </h3>
    ),
    // Normal paragraph
    normal: ({ children }) => (
      <p className="text-[18px] md:text-[20px] text-gray-900 leading-[1.5] md:leading-[1.7] mb-5 md:mb-7 tracking-[-0.01em]">
        {children}
      </p>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-gray-900 pl-6 py-2 my-8 md:my-10 italic text-xl text-gray-800 font-medium leading-tight tracking-tight">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-5 mb-8 space-y-3 md:space-y-5 text-[18px] md:text-[20px] text-gray-900 leading-[1.5] md:leading-[1.7] tracking-[-0.01em] pl-4">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-5 mb-8 space-y-3 md:space-y-5 text-[18px] md:text-[20px] text-gray-900 leading-[1.5] md:leading-[1.7] tracking-[-0.01em] pl-4">
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
    image: ({ value }) => <BlogImage value={value} />,
    // Video embed type
    videoEmbed: ({ value }) => {
      if (!value?.url) return null;

      const videoData = getVideoEmbedUrl(value.url);
      if (!videoData) return null;

      const { embedUrl, platform } = videoData;
      const caption = value.caption;

      return (
        <figure className="my-6 md:my-8">
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
    // Code block type
    code: ({ value }) => {
      if (!value?.code) return null;

      return (
        <CodeBlock
          code={value.code}
          language={value.language || "javascript"}
        />
      );
    },
  },
};

const IntroParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg italic text-gray-500 mb-8 leading-relaxed">
    {children}
  </p>
);

const NormalParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[18px] md:text-[20px] text-gray-900 leading-[1.5] md:leading-[1.7] mb-5 md:mb-7 tracking-[-0.01em]">
    {children}
  </p>
);

const BlogText = ({ content }: BlogTextProps) => {
  if (!content) return null;

  // Find the first normal block
  const firstNormalIndex = content.findIndex(
    (block) => block._type === 'block' && block.style === 'normal'
  );

  // Separate blocks into intro (first normal) and rest
  const introBlock = firstNormalIndex >= 0 ? content[firstNormalIndex] : null;
  const otherBlocks = firstNormalIndex >= 0
    ? [...content.slice(0, firstNormalIndex), ...content.slice(firstNormalIndex + 1)]
    : content;

  return (
    <div className={`flex flex-col gap-0 ${plusJakarta.className} w-full md:w-1/2 mx-auto mt-0 mb-20 lg:mb-32`}>
      {/* Render intro paragraph separately with special styling */}
      {introBlock && (
        <IntroParagraph>
          {introBlock.children?.map((child: any, i: number) => {
            if (child._type === 'span') {
              return child.text;
            }
            return null;
          })}
        </IntroParagraph>
      )}
      {/* Render all blocks except the intro */}
      <PortableText value={otherBlocks} components={components} />
    </div>
  );
};

export default BlogText;
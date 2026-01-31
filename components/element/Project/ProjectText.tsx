import React from "react";
import { Plus_Jakarta_Sans, PT_Serif } from "next/font/google"; // Changed to PT_Serif
import { PortableText, PortableTextBlock, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/hooks/GetSanityProjectBySlug";
import { getVideoEmbedUrl } from "@/utils/videoUtils";
import ImageZoom from "@/components/ui/ImageZoom";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const ptSerif = PT_Serif({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"]
});

interface ProjectTextProps {
  content?: PortableTextBlock[];
}

const ProjectImage = ({ value }: { value: any }) => {
  const [dimensions, setDimensions] = React.useState<{ width: number; height: number } | null>(null);

  if (!value?.asset) return null;

  const imageUrl = urlFor(value.asset).width(1200).quality(90).url();
  const alt = value.alt || "Project image";
  const caption = value.caption;

  React.useEffect(() => {
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
      }
    }

    const { width, height } = dimensions;
    const isPortrait = height > width * 1.3;
    const isLandscape = width > height; 
    
    // Auto-calculate aspect ratio to ensure layout stability
    const style: React.CSSProperties = { aspectRatio: `${width} / ${height}` };

    if (isPortrait) {
      return {
        containerClass: "max-w-sm mx-auto shadow-md md:max-w-xs rounded-lg mb-4 overflow-hidden bg-gray-100",
        imageClass: "object-cover",
        style
      };
    } else if (isLandscape) {
      return {
        containerClass: "w-full max-h-[500px] md:max-h-[50vh] rounded-lg mb-4 overflow-hidden",
        imageClass: "object-contain",
        style
      };
    } else {
      // Default
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
      {caption && (
        <figcaption className={`mt-4 text-center text-sm md:text-base text-gray-500 font-medium tracking-tight ${plusJakarta.className}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// Custom components for PortableText to render Sanity styling
const components: PortableTextComponents = {
  block: {
    // Headings
    h1: ({ children }) => (
      <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mt-12 mb-6 leading-tight text-balance tracking-tight break-normal hyphens-manual ${plusJakarta.className}`}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mt-10 mb-5 leading-tight text-balance tracking-tight break-normal hyphens-manual ${plusJakarta.className}`}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className={`text-2xl md:text-3xl font-semibold text-gray-900 mt-8 mb-4 leading-tight text-balance tracking-tight break-normal hyphens-manual ${plusJakarta.className}`}>
        {children}
      </h3>
    ),
    // Normal paragraph
    normal: ({ children }) => (
      <p className={`text-lg text-gray-900 mb-8 ${ptSerif.className}`}>
        {children}
      </p>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className={`border-l-[3px] border-gray-900 pl-6 py-1 my-10 italic text-2xl md:text-3xl text-gray-800 font-medium leading-tight tracking-tight ${ptSerif.className}`}>
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className={`list-disc list-outside ml-5 mb-8 space-y-3 text-lg text-gray-900 pl-4 ${ptSerif.className}`}>
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className={`list-decimal list-outside ml-5 mb-8 space-y-3 text-lg text-gray-900 pl-4 ${ptSerif.className}`}>
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
    image: ({ value }) => <ProjectImage value={value} />,
    // Video embed type
    videoEmbed: ({ value }) => {
      // Ensure we have a URL
      const url = value?.url;
      if (!url) return null;

      const videoData = getVideoEmbedUrl(url);
      
      // If we can't parse the video ID, show a fallback link
      if (!videoData) {
        return (
           <div className="my-12 p-4 bg-gray-100 rounded-lg text-center">
             <p className="text-gray-500 mb-2">Video preview not available</p>
             <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
               Watch on {url.includes('youtube') ? 'YouTube' : url.includes('vimeo') ? 'Vimeo' : 'External Site'}
             </a>
           </div>
        );
      }

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
              className="absolute top-0 left-0 w-full h-full border-none"
            />
          </div>
          {caption && (
            <figcaption className={`mt-4 text-center text-sm md:text-base text-gray-500 font-medium tracking-tight ${plusJakarta.className}`}>
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },

    // Video file Upload type
    videoFile: ({ value }) => {
      if (!value?.url) return null;
      const caption = value.caption;

      return (
        <figure className="my-12">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
            <video
              src={value.url}
              controls
              className="w-full h-full object-cover"
              controlsList="nodownload" // Optional: helps prevent direct downloads in some browsers
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {caption && (
            <figcaption className={`mt-4 text-center text-sm md:text-base text-gray-500 font-medium tracking-tight ${plusJakarta.className}`}>
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },

  },
};

const ProjectText = ({ content }: ProjectTextProps) => {
  if (!content) return null;

  return (
    <div className={`flex flex-col gap-0 w-full md:w-1/2 mx-auto mt-0 mb-4 lg:mb-8`}>
      <PortableText value={content} components={components} />
    </div>
  );
};

export default ProjectText;

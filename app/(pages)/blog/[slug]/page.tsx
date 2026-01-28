import React from 'react';
import Entrance from '@/components/ui/Entrance';
import { notFound } from 'next/navigation';
import { getSanityPostBySlug, urlFor } from '@/hooks/GetSanityPostBySlug';
import { getRelatedBlogs } from '@/hooks/GetRelatedContent';
import BlogHead from '@/components/element/Blog/BlogHead';
import BlogText from '@/components/element/Blog/BlogText';
import RelatedBlogs from '@/components/section/RelatedBlogs';
import type { Metadata } from 'next';

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSanityPostBySlug(slug);
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }
  return {
    title: `${post.title} | Alvin Al`,
    description: `Read ${post.title} on Alvin Al's blog.`,
  };
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const { slug } = await params;
  const post = await getSanityPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch related blogs
  const relatedBlogs = await getRelatedBlogs(post._id);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : "";
    
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).url() : undefined;
  const imageAlt = post.mainImage?.alt || post.title;

  return (
    <div className='bg-[#F8F0E5] w-full min-h-screen px-8 md:px-8 lg:px-20 pb-20'>
      <div className='flex flex-col mb-20 pt-6 md:pt-10 lg:pt-12'>
         <BlogHead 
             title={post.title}
             date={formattedDate}
             imageUrl={imageUrl}
             imageAlt={imageAlt}
           />

         <Entrance delay={0.6}>
           <BlogText content={post.body} />
         </Entrance>
         
         <Entrance delay={0.2}>
           <RelatedBlogs blogs={relatedBlogs} />
         </Entrance>
      </div>
    </div>
  );
};

export default BlogDetail;

"use client";
import React, { use, useState, useEffect } from "react";
import GetSanityProjectBySlug, { urlFor } from "@/hooks/GetSanityProjectBySlug";
import ProjectHead from "@/components/element/Project/ProjectHead";
import ProjectMainImage from "@/components/element/Project/ProjectMainImage";
import ProjectText from "@/components/element/Project/ProjectText";
import ProjectViewButton from "@/components/element/Project/ProjectViewButton";
import { useParams } from "next/navigation";
import { getRelatedProjects } from "@/hooks/GetRelatedContent";
import RelatedProjects from "@/components/section/RelatedProjects";
import Entrance from "@/components/ui/Entrance";
import Loader from "@/components/ui/Loader";

const ProjectDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const { project, loading } = GetSanityProjectBySlug(slug);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);

  useEffect(() => {
    if (project && project._id) {
      getRelatedProjects(project._id).then((data) => {
        setRelatedProjects(data);
      }).catch(err => console.error(err));
    }
  }, [project]);

  console.log("Fetched Project Data:", project);
  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  if (!project) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <p className='text-lg text-gray-500'>Project not found.</p>
      </div>
    );
  }

  const imageUrl = project.mainImage ? urlFor(project.mainImage).width(1920).quality(95).url() : "";
  
  // Format Date: "YYYY-MM-DD" -> "Month Year"
  const formattedDate = project.date 
    ? new Date(project.date).toLocaleString('default', { month: 'long', year: 'numeric' })
    : "Ongoing";

  return (
    <div className='bg-[#F8F0E5] w-full min-h-screen px-8 md:px-8 lg:px-20'>
       {/* Removed lg:px-64 to allow full width header and image */}
      <div className='flex flex-col mb-20 pt-6 md:pt-10 lg:pt-12'>
        <ProjectHead 
          title={project.title}
          description={project.titleDescription}
          date={formattedDate} 
          techStack={project.techStack}
          websiteLink={project.websiteLink}
          imageUrl={imageUrl}
          imageAlt={project.mainImage?.alt || project.title}
          width={project.mainImage?.asset?.metadata?.dimensions?.width}
          height={project.mainImage?.asset?.metadata?.dimensions?.height}
        />
        {/* ProjectMainImage is now inside ProjectHead */}
        {/* ProjectMainImage is now inside ProjectHead */}
        <Entrance viewportMargin="0px 0px -20% 0px">
          <ProjectText content={project.content} />
        </Entrance>
        
        <Entrance>
          <RelatedProjects projects={relatedProjects} />
        </Entrance>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

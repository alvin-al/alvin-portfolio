"use client";
import React from "react";
import ProjectListCard from "../templates/ProjectListCard";
import GetSanityProjects from "@/hooks/GetSanityProjects";

export default function ProjectList() {
  const projects = GetSanityProjects();

  return (
    <div className='flex flex-col lg:flex-row w-full gap-8' id='project'>
      <div className='hidden lg:block text-lg font-medium text-gray-500 lg:w-1/5 xl:w-1/5 lg:sticky lg:top-24 lg:self-start'>
        Created by me
      </div>

      <div className='lg:w-4/5 xl:w-4/5'>
        {projects.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-lg text-gray-500'>Loading projects...</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full'>
            {projects.map((project) => {
              return (
                <div className='w-full' key={project.id}>
                  <ProjectListCard
                    src={project.mainImage}
                    title={project.title}
                    link={`/projects/${project.slug}`}
                    key={project.id}
                    titledesc={project.titleDescription}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import React from "react";
import WorkPictures from "../templates/WorkPictures";
import GetSanityProjects from "@/hooks/GetSanityProjects";
import Link from "next/link";
import RoundedButton from "../element/RoundedButton";

export default function Work() {
  const projects = GetSanityProjects();

  return (
    <div id='project' className='scroll-mt-16'>
      <h2 className='sr-only'>Projects</h2>
      <div id='all-works' className='grid lg:grid-cols-3 gap-12 xl:pt-32 xl:pb-16'>
        {projects.slice(0, 3).map((project) => {
          return (
            <div className='w-full aspect-square' key={project.id}>
              <WorkPictures
                src={project.mainImage}
                title={project.title}
                slug={project.slug}
                key={project.id}
                titledesc={project.titleDescription}
              />
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center lg:justify-end pt-12 pb-20">
        <Link href="/projects">
          <RoundedButton>View All Projects</RoundedButton>
        </Link>
      </div>
    </div>
  );
}

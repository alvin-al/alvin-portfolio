"use client";
import React from "react";
import WorkPictures from "../templates/WorkPictures";
import GetEntriesContentful from "@/hooks/GetEntriesContentful";

export default function Work() {
  const projects = GetEntriesContentful();

  return (
    <div id='project' className='scroll-mt-16'>
      <h2 className='sr-only'>Projects</h2>
      <div id='all-works' className='grid lg:grid-cols-3 gap-12 xl:py-32'>
        {projects.map((project) => {
          return (
            <div className='w-full aspect-square' key={project.title}>
              <WorkPictures
                src={project.mainImage}
                title={project.title}
                link={project.websiteLink}
                key={project.id}
                titledesc={project.titleDescription}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

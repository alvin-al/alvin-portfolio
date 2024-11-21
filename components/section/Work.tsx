"use client";
import React from "react";
import WorkPictures from "../templates/WorkPictures";
import GetEntriesContentful from "@/hooks/GetEntriesContentful";

export default function Work() {
  const projects = GetEntriesContentful();

  return (
    <div id='work'>
      <div id='all-works' className='flex flex-col lg:flex-row gap-12 xl:py-32'>
        {projects.map((project) => (
          <WorkPictures
            src={project.mainImage}
            title={project.title}
            link={project.websiteLink}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
}

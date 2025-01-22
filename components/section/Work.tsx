"use client";
import React from "react";
import WorkPictures from "../templates/WorkPictures";
import GetEntriesContentful from "@/hooks/GetEntriesContentful";

export default function Work() {
  const projects = GetEntriesContentful();

  return (
    <div id='work'>
      <div id='all-works' className='grid lg:grid-cols-3 gap-12 xl:py-32'>
        {projects.map((project) => (
          <WorkPictures
            src={project.mainImage}
            title={project.title}
            link={project.websiteLink}
            key={project.id}
            titledesc={project.titleDescription}
          />
        ))}
      </div>
    </div>
  );
}

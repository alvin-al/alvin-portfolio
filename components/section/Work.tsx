"use client";
import React from "react";
import WorkPictures from "../templates/WorkPictures";
import GetEntriesContentful from "@/hooks/GetEntriesContentful";

const backgroundColor = [
  "#FFD6A5",
  "#FCE883",
  "#FFDAB9",
  "#FAE69E",
  "#FFDAC1",
  "#E3C699",
  "#FFF0B5",
];

export default function Work() {
  const projects = GetEntriesContentful();

  return (
    <div id='project' className='scroll-mt-16'>
      <div id='all-works' className='grid lg:grid-cols-3 gap-12 xl:py-32'>
        {projects.map((project, index) => {
          const color = backgroundColor[index];

          return (
            <div className='w-full aspect-square'>
              <WorkPictures
                src={project.mainImage}
                title={project.title}
                link={project.websiteLink}
                key={project.id}
                titledesc={project.titleDescription}
                bgColor={color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

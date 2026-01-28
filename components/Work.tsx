"use client";
import React from "react";
import WorkPictures from "./templates/WorkPictures";
import SubHeader from "./ui/SubHeader";
import GetSanityProjects from "@/hooks/GetSanityProjects";

export default function Work() {
  const projects = GetSanityProjects();

  const p =
    "As a web developer, I create websites that facilitate communication between businesses and their customers or clients. Websites are powerful tools that can enhance brand awareness, generate leads, and increase conversions. I use the latest technologies and best practices to design and develop websites that are user-friendly and responsive.";

  return (
    <div>
      <SubHeader>Work</SubHeader>
      <p className='text-left text-white text-base pt-4 pb-10 lg:pl-[55%] xl:pl-[60%] xl:text-lg'>
        {p}
      </p>
      <div id='all-works' className='flex flex-col xl:flex-row gap-8'>
        {projects.map((project) => (
          <WorkPictures
            src={project.mainImage}
            title={project.title}
            slug={project.slug}
            titledesc={project.titleDescription}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
}

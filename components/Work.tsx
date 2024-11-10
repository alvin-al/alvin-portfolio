"use client";
import React, { useEffect } from "react";
import WorkPictures from "./templates/WorkPictures";
import urbia from "@/public/works/urbiaid.jpeg";
import SubHeader from "./ui/SubHeader";
import client from "@/utils/contentfulClient";

export default function Work() {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    client.getEntries().then((response) => setProjects(response.items));
  }, []);

  console.log(projects);

  const p =
    "As a web developer, I create websites that facilitate communication between businesses and their customers or clients. Websites are powerful tools that can enhance brand awareness, generate leads, and increase conversions. I use the latest technologies and best practices to design and develop websites that are user-friendly and responsive.";

  return (
    <div id='work'>
      <SubHeader>Work</SubHeader>
      <p className='text-left text-white text-base pt-4 pb-10 lg:pl-[55%]  xl:pl-[60%] xl:text-lg'>
        {p}
      </p>
      <div id='all-works' className='flex flex-col xl:flex-row gap-8'>
        {projects.map((project: Project) => (
          <WorkPictures
            src={"http://" + project.fields.mainImage.fields.file.url}
            title={project.fields.title}
            link={project.fields.slug}
            key={project.sys.id}
          />
        ))}
      </div>
    </div>
  );
}

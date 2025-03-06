"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProjectHead from "../element/Project/ProjectHead";
import ProjectText from "../element/Project/ProjectText";
import ProjectMainImage from "../element/Project/ProjectMainImage";
import ProjectViewButton from "../element/Project/ProjectViewButton";
import contentfulClient from "@/lib/contentful";
import { ProjectContentType } from "@/types";

const Project = () => {
  const path = usePathname().replace("/", "");
  const [data, setData] = useState<ProjectContentType | null>(null);
  console.log(path);

  console.log(data);
  return (
    <div className='px-8 md:px-64 flex flex-col mb-20'>
      {/* Title */}
      <ProjectHead />
      {/* Image */}
      <ProjectMainImage />
      {/* Text */}
      <ProjectText />
      {/* View site button */}
      <ProjectViewButton />
    </div>
  );
};

export default Project;

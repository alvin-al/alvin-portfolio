import React from "react";
import WorkPictures from "../templates/WorkPictures";
import Link from "next/link";
import RoundedButton from "../element/RoundedButton";

interface Project {
  mainImage: string;
  title: string;
  slug: string;
  id: string;
  websiteLink: string;
  titleDescription: string;
}

interface WorkProps {
  projects: Project[];
}

export default function Work({ projects }: WorkProps) {
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
      
      <div className="flex justify-center lg:justify-center pb-20 md:pb-32 mt-8 md:mt-0">
        <Link href="/projects">
          <RoundedButton>View All Projects</RoundedButton>
        </Link>
      </div>
    </div>
  );
}
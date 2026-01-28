import ProjectList from "@/components/section/ProjectList";
import Entrance from "@/components/ui/Entrance";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className='bg-[#F8F0E5] w-full h-full flex flex-col px-8 md:px-20 pb-20'>
      {/* Hero Section */}
      <Entrance>
        <div className='w-full pt-10 pb-16 md:pt-12 md:pb-20'>
          <h1 className='text-5xl xl:text-[60px] leading-snug font-medium mb-6'>
            Projects
          </h1>
          <p className='text-lg font-medium text-gray-600 max-w-2xl'>
            A collection of my work showcasing web development projects, from concept to deployment. Each project represents a unique challenge and creative solution.
          </p>
        </div>
      </Entrance>

      {/* Project List */}
      <Entrance>
        <ProjectList />
      </Entrance>
    </div>
  );
};

export default ProjectsPage;
import React from "react";
import RoundedButton from "../RoundedButton";
import Link from "next/link";

interface ProjectViewButtonProps {
  link: string;
}

const ProjectViewButton = ({ link }: ProjectViewButtonProps) => {
  if (!link) return null;

  return (
    <div>
      <div className='w-full mt-16 flex justify-center'>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <RoundedButton>View Live Site</RoundedButton>
        </Link>
      </div>
    </div>
  );
};

export default ProjectViewButton;

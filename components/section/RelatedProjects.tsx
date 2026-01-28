import Link from "next/link";
import ProjectListCard from "@/components/templates/ProjectListCard";
import { Plus_Jakarta_Sans } from "next/font/google";
import { RelatedProject } from "@/hooks/GetRelatedContent";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface RelatedProjectsProps {
  projects: RelatedProject[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full mt-20 border-t border-gray-300 pt-16">
      <h3 className={`${plusJakarta.className} text-3xl md:text-4xl font-bold mb-10 text-gray-900`}>
        Related Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <div key={project.id} className="w-full">
            <ProjectListCard 
                src={project.mainImage}
                title={project.title}
                link={`/projects/${project.slug}`}
                titledesc={project.titleDescription || project.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

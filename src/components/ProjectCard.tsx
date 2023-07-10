import React, { useState } from "react";
import ProjectDetailsPopup from "./ProjectDetailsPopup";
interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  project: string;
  techUsed: string;
  repoLink: [string, string];
  liveLink?: string;
}
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        onClick={handlePopupOpen}
        className="relative rounded-lg p-6 border-2 border-bor bg-transparent cursor-pointer"
      >
        <div className="overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project?.title}
            className="pointer-events-none select-none w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
          />
        </div>

        <div className="">
          <p className="pt-5 text-[14px] font-normal text-gray-lite block text-bor">
            {project.category}
          </p>
          <h3 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-pri text-txt mt-2">
            {project.title}
          </h3>
        </div>
      </div>
      {isPopupOpen && (
        <ProjectDetailsPopup project={project} onClose={handlePopupClose} />
      )}
    </>
  );
};

export default ProjectCard;

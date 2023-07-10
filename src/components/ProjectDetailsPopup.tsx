import React, { useRef, useEffect } from "react";
import {
  RiCodeSSlashFill,
  RiExternalLinkLine,
  RiFileCodeFill,
} from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";
import Markdown from "markdown-to-jsx";

interface ProjectDetailsPopupProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailsPopup: React.FC<ProjectDetailsPopupProps> = ({
  project,
  onClose,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={popupRef}
        className=" lg:w-2/3 flex flex-col items-center bg-bg3 rounded-xl p-4 lg:p-8 shadow-lg "
      >
        <div
          className="text-7xl cursor-pointer z-50 absolute top-6 right-2 lg:right-48 lg:top-10 hover:rotate-45 transition-all ease-in-out duration-300 border p-0.5 lg:p-2 rounded-full hover:bg-pri bg-sec"
          onClick={onClose}
        >
          <FaTimes className="text-xl" />
        </div>
        <div className=" overflow-y-scroll max-h-[80vh] w-full no-scrollbar relative ">
          <h2 className="text-pri uppercase text-4xl text-center font-bold mb-3">
            {project.title}
          </h2>
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 rounded-lg pointer-events-none select-none"
            />
          </div>
          <div className="p-6">
            <p className="text-txt font-normal text-sm whitespace-pre-wrap "
            dangerouslySetInnerHTML={{ __html: project.description }} 
            />
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2 my-6 text-txt items-center text-lg space-y-3 lg:space-y-">
              <div className="space-y-2">
                <p className="text-txt flex items-center text-lg space-x-1 ">
                  <RiFileCodeFill />
                  <span className="">Project:&nbsp;{project.project}</span>
                </p>
                <p className="text-txt flex items-center text-lg space-x-1">
                  <RiCodeSSlashFill />
                  <span className="">Tech Used:&nbsp;{project.techUsed}</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center space-x-1">
                  <TbSourceCode />
                  <span className="">
                    Repo:&nbsp;
                    <a
                      href={project.repoLink[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-acc"
                    >
                      {project.repoLink[0]}
                    </a>
                  </span>
                </p>
                {project.liveLink && (
                  <p className="flex items-center space-x-1">
                    <RiExternalLinkLine />
                    <span className="">
                      Preview:&nbsp;
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-acc"
                      >
                        {project.liveLink}
                      </a>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPopup;

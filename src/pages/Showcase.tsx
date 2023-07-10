import React, { useState } from "react";
import { projectList } from "../data/utils";
import Filter from "../components/Filter";
import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";
import Masonry from "react-masonry-css";

const ProjectPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    ...new Set(projectList.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectList
      : projectList.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const numAvailableProjects = filteredProjects.length;
  const projectsCounts: { [category: string]: number } = {};
  projectList.forEach((project) => {
    projectsCounts[project.category] =
      (projectsCounts[project.category] || 0) + 1;
  });

  return (
    <>
      <Heading head="My Projects" />
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            projectsCounts={projectsCounts}
            allProjects={numAvailableProjects}
          />
        </div>
        <div className="container mx-auto py-8">
          {/* <div className="mb-4 text-right">
            <span className="text-gray-500 text-sm">
              {numAvailableProjects}
              {numAvailableProjects === 1 ? " project" : " projects"}
            </span>
          </div> */}
          <Masonry
            breakpointCols={{
              default: 2,
              768: 1,
            }}
            className="flex justify-center space-x-3"
            columnClassName="masonry-grid-column"
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="mb-3">
                <ProjectCard project={project} />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

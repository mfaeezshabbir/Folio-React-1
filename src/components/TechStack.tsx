import React, { useState } from "react";
import { techStackData } from "../data/utils";

function TechStack() {
  const [hoveredTech, setHoveredTech] = useState("");

  const handleIconHover = (techName) => {
    setHoveredTech(techName);
  };

  const handleIconLeave = () => {
    setHoveredTech("");
  };

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold mb-4">My Digital Powers</h2>
      <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center text-center ">
        {techStackData.map((tech) => (
          <div
            key={tech.name}
            className="relative flex flex-col items-center justify-center"
            onMouseEnter={() => handleIconHover(tech.name)}
            onMouseLeave={handleIconLeave}
          >
            <tech.icon
              className={`w-10 h-10 text-txt ${
                hoveredTech === tech.name ? "filter blur-lg" : ""
              }`}
            />
            <span
              className={`absolute text-center font-bold ${
                hoveredTech === tech.name ? "text-txt " : "hidden"
              }`}
            >
              {tech.name}
            </span>
          </div>
        ))} <span className="font-light text-acc">And Going</span>
      </div>
    </div>
  );
}

export default TechStack;

import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSFill, RiFilter3Fill } from "react-icons/ri";

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  projectsCounts: { [category: string]: number };
  allProjects: number;
}

const Filter: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  projectsCounts,
  allProjects,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("All");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedLabel(category);
    onCategoryChange(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center gap-1 px-3 py-2 text-sm  font-medium text-txt bg-bg3 border border-bor rounded-lg shadow-sm"
        onClick={handleDropdownToggle}
      >
        <RiFilter3Fill className="text-txt" />
        {selectedLabel}
        <RiArrowDownSFill
          className={`text-txt ${isDropdownOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-2 bg-bg3 border border-bor rounded-md right-0 shadow-lg"
        >
          {["All", ...categories].map((category) => (
            <button
              key={category}
              className={`block w-full px-4 py-2 text-sm text-txt hover:bg-bor whitespace-nowrap ${
                selectedCategory === category ? "bg-acc" : ""
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category} ({projectsCounts[category] || allProjects})
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;

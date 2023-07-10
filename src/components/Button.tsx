import React from "react";

interface ButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  Icon?: React.ElementType;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  isSelected =false,
  onClick,
  Icon,
  className = "",
}) => {
  return (
    <button
      className={`px-4 py-2 text-sm  font-medium w-full whitespace-nowrap ${
        isSelected
          ? "text-white bg-acc"
          : "text-bor hover:text-txt hover:bg-acc "
      }
      ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="inline-block mr-2" />}{" "}
      {/* Display the icon if provided */}
      {text}
    </button>
  );
};

export default Button;

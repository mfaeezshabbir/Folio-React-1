import React from "react";

interface HeadingProps {
  head: string;
}

const Heading: React.FC<HeadingProps> = ({ head }) => {
  return (
    <section className="flex justify-between items-center space-x-3">
      <h1 className="text-4xl font-bold text-txt my-3 whitespace-nowrap">
        {head}
      </h1>
      <hr className="border-0 h-1 bg-gradient-to-r from-sec to-pri w-full rounded" />
    </section>
  );
};

export default Heading;

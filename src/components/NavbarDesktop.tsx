import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/utils";
import { useState } from "react";

const NavbarDesktop = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState('');

  return (
    <header className="w-full h-fit bg-gradient-to-b from-transparent to-bg bg-opacity-60 px-12 rounded-3xl">
      <nav className="hidden md:block">
        <ul className="flex space-x-5 justify-around">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onMouseEnter={() => setHoveredLink(link.path)}
              onMouseLeave={() => setHoveredLink('')}
              className={"relative h-20 w-20 cursor-pointer text-xs flex justify-center items-center"}
            >
              <span className={`h-16 w-16 flex items-center justify-center bg-bg2 rounded-full transition-all duration-300 ease-in-out ${
                location.pathname === link.path ? 'text-txt bg-gradient-to-r from-pri to-sec' : ''
              } ${hoveredLink === link.path ? '-translate-y-6' : ''}`}>
                <link.icon className="text-txt" size={40} />
              </span>
              {hoveredLink === link.path && (
                <span className="absolute bottom-0 w-full text-txt text-xs text-center transition-all duration-300 ease-in-out pb-2 m-0">{link.name}</span>
              )}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarDesktop;

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/utils";

const NavbarMobile = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const menuAnimationVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div className="w-full relative bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
        <div className="flex justify-between w-full px-4">
          <span className="text-white h-[26px] lg:h-[32px] text-3xl">MFS</span>
          <button
            onClick={handleMobileMenuToggle}
            className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 p-[.6rem] "
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-white rounded-full scale-2" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425] p-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuAnimationVariants}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={handleNavLinkClick}
                  className={`flex gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white  hover:text-white hover:bg-gradient-to-r to-[#FA5252] from-[#DD2476] ${location.pathname === link.path ? "text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]" : ""
                    }`}
                >
                  <link.icon className="text-white" size={20} />
                  {link.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavbarMobile;

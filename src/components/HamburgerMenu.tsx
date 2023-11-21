import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import NavList from './NavList';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {isMenuOpen ? (
        <div className="relative flex flex-col items-end h-full md:hidden">
          <div
            onClick={toggleMenu}
            className="text-4xl duration-300 transform md:hidden hover:scale-110"
          >
            <FiAlignJustify />
          </div>

          <NavList customclass="flex-col backdrop-sepia p-4 rounded-2xl   absolute top-10" />
        </div>
      ) : (
        <div className="flex flex-col items-end md:hidden">
          <div
            onClick={toggleMenu}
            className="text-4xl duration-300 transform md:hidden hover:scale-110"
          >
            <FiAlignJustify />
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

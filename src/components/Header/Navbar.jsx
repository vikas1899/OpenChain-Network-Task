import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

const NavLinkItem = ({ to, children, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `${`${
            isActive ? "text-[#00ffa7]" : "text-white"
          } hover:text-[#00ffa7]   `}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` ${
        isOpen ? `mt-20 absolute lg:mt-0 mr-20 lg:mr-5 ` : ``
      }    py-2`}
    >
      {/* Menu toggle button */}
      <button
        onClick={toggleNavbar}
        className="block  text-xl mx-auto  text-white lg:hidden hover:text-[#00ffa7] focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Menu items */}
      <ul
        className={`lg:flex  items-center justify-end gap-10 mt-0 ${
          isOpen ? "block  bg-[#060606]   p-4 rounded-lg " : "hidden "
        }  lg:block`}
      >
        <NavLinkItem to="/" onClick={toggleNavbar}>
          Company
        </NavLinkItem>
        <NavLinkItem to="/service" onClick={toggleNavbar}>
          Services
        </NavLinkItem>
        <NavLinkItem to="/businessModels" onClick={toggleNavbar}>
          Business Models
        </NavLinkItem>
        <NavLinkItem to="/blogs" onClick={toggleNavbar}>
          Blogs
        </NavLinkItem>
        <NavLinkItem to="/contact" onClick={toggleNavbar}>
          Contact Us
        </NavLinkItem>
      </ul>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["Home", "Shop", "About", "Contact"];

const navIcons = [
  { id: 1, icon: FaUser },
  { id: 2, icon: FaSearch },
  { id: 3, icon: FaHeart },
  { id: 4, icon: FaShoppingCart },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Furniro Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-11 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-yellow-600 cursor-pointer transition-colors"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center gap-6 text-gray-700 text-lg">
          {navIcons.map(({ id, icon: Icon }) => (
            <Icon
              key={id}
              className="cursor-pointer hover:text-yellow-600 transition-colors"
            />
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer} className="text-gray-700 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer} className="text-gray-700 text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-4 px-6 text-gray-700 font-medium text-lg">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-yellow-600 cursor-pointer transition-colors"
              onClick={toggleDrawer}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-6 px-6 text-gray-700 text-xl">
          {navIcons.map(({ id, icon: Icon }) => (
            <Icon
              key={id}
              className="cursor-pointer hover:text-yellow-600 transition-colors"
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
};

export default Navbar;

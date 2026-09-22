import React, { useState } from "react";
import pic from "/fafa.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Fai<span className="text-green-500 text-2xl">z</span>
              </h1>
              <p className="text-sm">AI Engineer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="bg-white fixed top-16 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 text-xl z-40">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              onClick={() => setMenu(false)}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:scale-105 duration-200 font-semibold cursor-pointer"
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;

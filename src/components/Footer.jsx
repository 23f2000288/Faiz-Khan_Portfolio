import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center space-y-6">
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/md-faiz-khan-21a89334b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/23f2000288"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <ImGithub size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition duration-300"
              >
                <FaSquareXTwitter size={28} />
              </a>
            </div>

            {/* Divider */}
            <div className="w-16 h-[2px] bg-gray-600 rounded-full"></div>

            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Faiz Khan</span>.  
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

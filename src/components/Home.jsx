import React from 'react';
import pic from "/fafa.jpg";
import { FaLinkedin, FaYoutube, FaPython } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaSquareXTwitter, FaDatabase, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaJava } from "react-icons/lia";
import {ReactTyped} from "react-typed";

function Home() {
  return (
    <>
      <section 
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start">

          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1 animate-fadeIn">
            <span className="text-lg md:text-xl font-semibold text-gray-700">
              👋 Welcome to My Portfolio
            </span>

            <div className="flex flex-wrap items-center text-3xl md:text-5xl font-bold leading-tight">
              <h1 className="mr-2">Hi, I’m</h1>
              <span className="text-blue-500">Fai Z</span>
              <span className="ml-2">—</span>
              <ReactTyped
                className="ml-2 text-indigo-500"
                strings={["AI Engineer", "GenAI & LLM Developer", "Machine Learning Engineer"]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>

            <p className="text-sm md:text-md text-gray-600 text-justify leading-relaxed max-w-lg">
              I build and ship AI-powered systems end-to-end — from
              <span className="font-semibold text-blue-500"> Machine Learning</span> and
              <span className="font-semibold text-green-500"> Deep Learning</span> models to
              <span className="font-semibold text-indigo-500"> Generative AI applications</span> using
              LLMs and Retrieval-Augmented Generation (RAG). My work spans data pipelines, model
              development, and production deployment, turning real-world problems into working,
              deployed AI solutions.
            </p>

            {/* Social and Skills Section */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 mt-6">
              
              {/* Available on */}
              <div className="text-center">
                <h2 className="font-bold text-gray-700 mb-3">Available on:</h2>
                <ul className="flex justify-center space-x-5">
                  {[
                    { icon: <FaLinkedin />, color: "text-blue-600", link: "https://www.linkedin.com/in/md-faiz-khan-21a89334b/" },
                    { icon: <ImGithub />, color: "text-gray-800", link: "https://github.com/23f2000288" },
                    { icon: <FaYoutube />, color: "text-red-600", link: "https://www.youtube.com/@FAIZKHAN-ht4du" },
                    { icon: <FaSquareXTwitter />, color: "text-blue-500", link: "https://x.com/home" }
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={item.link} target="_blank" rel="noreferrer"
                         className={`${item.color} md:text-3xl transition transform hover:scale-125 hover:opacity-80`}>
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Currently working on */}
              <div className="text-center">
                <h2 className="font-bold text-gray-700 mb-3">Currently working on:</h2>
                <ul className="flex justify-center space-x-5">
                  {[ 
                    <FaPython className="text-blue-500" />,
                    <IoLogoJavascript className="text-yellow-500" />,
                    <LiaJava className="text-red-500" />,
                    <FaDatabase className="text-indigo-500" />,
                    <FaReact className="text-cyan-500" />
                  ].map((icon, i) => (
                    <li key={i} className="md:text-3xl transition transform hover:scale-125 hover:opacity-80">
                      {icon}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end order-1 animate-slideIn">
            <img 
              src={pic} 
              className="rounded-full shadow-lg md:w-[450px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-300" 
              alt="Profile"
            />
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Home;

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function About() {
  return (
    <div 
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-5 border-b-4 border-green-500 inline-block">
        About Me
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Hi, I'm <span className="font-semibold text-green-600">Md Faiz Khan</span> — an
        <span className="font-semibold"> AI Engineer</span> and B.S. Data Science student at
        <span className="font-semibold"> IIT Madras</span>, currently working as an
        <span className="font-semibold"> AI Research Intern at CYStar, IIT Madras</span>. I build
        AI systems end-to-end — from
        <span className="font-semibold"> Machine Learning</span> and
        <span className="font-semibold"> Deep Learning</span> models to
        <span className="font-semibold"> Generative AI applications</span> using LLMs and
        Retrieval-Augmented Generation (RAG) — and I've validated my modeling skills by ranking in
        the <span className="font-semibold">top 9% of 1,800+ participants</span> in a competitive
        ML leaderboard. I care about shipping working, deployed solutions, not just notebooks.
      </p>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-green-500 font-semibold text-xl mb-4">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "IIT Madras (Current)",
              year: "Expected 2027",
              school: "B.S. in Data Science and Programming",
              details: "CGPA: 7.8/10"
            },
            {
              title: "12th",
              year: "2022 • Science (PCM)",
              school: "Scottish Central, Sasaram",
              details: "CBSE Board — 80%"
            },
            {
              title: "10th",
              year: "2020",
              school: "ABR Foundation School, Sasaram",
              details: "CBSE Board — 90%"
            }
          ].map((edu, i) => (
            <div 
              key={i} 
              className="bg-white/5 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{edu.title}</h3>
                <span className="text-xs text-gray-500">{edu.year}</span>
              </div>
              <p className="mt-1 text-xs text-gray-600">{edu.school}</p>
              {edu.details && (
                <p className="mt-1 text-xs text-gray-600">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-green-500 font-semibold text-xl mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Programming",
              items: "Python, SQL, C++, JavaScript"
            },
            {
              title: "Machine Learning",
              items: "Scikit-Learn, XGBoost, Random Forest, Regression, Classification, Hyperparameter Tuning, Model Evaluation"
            },
            {
              title: "Deep Learning & Computer Vision",
              items: "PyTorch, TensorFlow, CNNs, Transfer Learning, OpenCV, Feature Extraction, Object Detection"
            },
            {
              title: "NLP & Generative AI",
              items: "LLMs, RAG, Prompt Engineering, LangChain, FAISS, Tokenization, Embeddings, Transformers, OpenAI API"
            },
            {
              title: "Data Science",
              items: "Pandas, NumPy, Exploratory Data Analysis, Feature Engineering"
            },
            {
              title: "Backend & Deployment",
              items: "FastAPI, Flask, REST APIs, Docker, Git/GitHub, Linux, Streamlit"
            },
            {
              title: "Web Development",
              items: "React.js, Vue.js, HTML, CSS"
            },
            {
              title: "Databases",
              items: "MySQL, PostgreSQL"
            }
          ].map((skill, i) => (
            <div 
              key={i} 
              className="bg-white/5 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold">{skill.title}</h3>
              <p className="mt-1 text-xs text-gray-600">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <h2 className="text-green-500 font-semibold text-xl mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Purchase Value Prediction — ML Competition",
              desc: "Gradient Boosting (XGBoost) regression model predicting session-level purchase value on a 105-column e-commerce dataset. Ranked 159th of 1,800+ participants (top 9%) with an R² of 0.68 on out-of-sample data.",
              tech: "Python, XGBoost, Pandas, Feature Engineering",
              link: "https://github.com/23f2000288"
            },
            {
              name: "TDS Virtual TA",
              desc: "Generative AI assistant using Retrieval-Augmented Generation (RAG) — scraped and embedded Discourse forum data, indexed with FAISS, and used OpenAI's LLM API with prompt engineering to generate grounded, accurate answers.",
              tech: "Python, FastAPI, RAG, LLMs, FAISS, OpenAI API",
              link: "https://tds-virtual-ta-zvjo.onrender.com/"
            },
            {
              name: "Insurance Premium Prediction",
              desc: "Random Forest and XGBoost regression models predicting insurance premiums from structured data, achieving an R² of 0.83. Deployed via FastAPI with a Streamlit dashboard.",
              tech: "Python, Scikit-Learn, FastAPI, Streamlit",
              link: "https://github.com/23f2000288"
            },
            {
              name: "Phishing & Brand Impersonation Detection",
              desc: "Computer Vision and Deep Learning pipeline using logo recognition, feature extraction, and CNN-based classification to detect phishing websites at scale.",
              tech: "PyTorch, OpenCV, FastAPI",
              link: "https://github.com/23f2000288"
            },
            {
              name: "SONIK — Smart Retail Management System",
              desc: "Full-stack retail platform with SQL-backed inventory and customer management, plus an LLM-powered chatbot for natural-language customer support.",
              tech: "Python, FastAPI, Vue.js, SQL, LLMs",
              link: "https://retaildelhi.netlify.app/login"
            },
            {
              name: "Business Data Management Capstone",
              desc: "End-to-end consulting project for a local retail business — stakeholder interviews, sales/inventory data analysis, and a digital transformation strategy proposal.",
              tech: "Excel, Python (Pandas, NumPy), Business Analysis",
              link: "https://github.com/23f2000288"
            }
          ].map((project, i) => (
            <div 
              key={i} 
              className="bg-white/5 p-4 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold">{project.name}</h3>
                <p className="mt-1 text-xs text-gray-600">{project.desc}</p>
                <p className="mt-1 text-xs text-gray-500">
                  <strong>Tech:</strong> {project.tech}
                </p>
              </div>
              <div className="flex space-x-3 mt-3 text-blue-500">
                <a 
                  href="https://github.com/23f2000288" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;

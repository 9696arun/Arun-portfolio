"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
} from "react-icons/fa";

const projects = [

  {
    title:
      "Quantum Safe Communication System",

    desc:
      "Hybrid cryptography system using AES, HMAC and Post Quantum Cryptography concepts.",

    tech:
      "Python • Security • Cryptography",

    github:
      "https://github.com/9696arun/Quantum-Safe-Communication-System-using-Lattice-Based-Post-Quantum-Cryptography-Techniques",
  },

  {
    title:
      "Intrusion Detection System",

    desc:
      "CNN & QNN based future network security intrusion detection system.",

    tech:
      "AI/ML • CNN • Cyber Security",

    github:
      "https://github.com/9696arun",
  },

  {
    title:
      "SocialBlog Platform",

    desc:
      "Modern MERN blogging platform with authentication and CRUD operations.",

    tech:
      "React • Node.js • MongoDB",

    github:
      "https://github.com/9696arun/SocialBlog-A-Modern-Blogging-Platform",
  },

  {
    title:
      "LiteAI Local Assistant",

    desc:
      "Offline AI assistant powered by HuggingFace models for summarization and Q&A.",

    tech:
      "Flask • Transformers • AI",

    github:
      "https://github.com/9696arun",
  },

];

export default function Projects() {

  return (

    <section id="projects">

      <h2 className="sectionTitle">
        Projects
      </h2>

      <div className="projectsContainer">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="projectCard"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <img
              src="/project.png"
              alt="project"
            />

            <h3>
              {project.title}
            </h3>

            <p>
              {project.desc}
            </p>

            <span>
              {project.tech}
            </span>

            <a
              href={project.github}
              target="_blank"
            >

              <button className="btn">

                <FaGithub />

                GitHub

              </button>

            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
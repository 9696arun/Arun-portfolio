"use client";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

const projects = [

  {
    title: "Quantum Safe Communication System",

    desc:
      "Hybrid cryptography system using AES, HMAC and Post Quantum Cryptography concepts.",

    tech: "Python • Security • Cryptography",

    image: "/Quantum.jpg",

    github:
      "https://github.com/9696arun/Quantum-Safe-Communication-System-using-Lattice-Based-Post-Quantum-Cryptography-Techniques",
  },

  {
    title: "Intrusion Detection System",

    desc:
      "CNN & QNN based future network security intrusion detection system.",

    tech: "AI/ML • CNN • Cyber Security",

    image: "/ids_cnn.png",

    github:
      "https://github.com/9696arun",
  },

  {
    title: "SocialBlog Platform",

    desc:
      "Modern MERN blogging platform with authentication and CRUD operations.",

    tech: "React • Node.js • MongoDB",

    image: "/blog.jpg",

    github:
      "https://github.com/9696arun/SocialBlog-A-Modern-Blogging-Platform",
  },

 {
  title: "Explore More Repositories",

  desc:
    "Discover more innovative projects related to AI/ML, Cyber Security, Full Stack Development, Android Apps, Research and Intelligent Systems on my GitHub profile.",

  tech:
    "AI • MERN • Cyber Security • Python • Research",

  image: "/more.jpg",

  github:
    "https://github.com/9696arun?tab=repositories"
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
              src={project.image}
              alt={project.title}
              className="projectImage"
            />

            <div className="projectContent">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.desc}
              </p>

              <span className="projectTech">
                {project.tech}
              </span>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >

                <button className="btn">

                  <FaGithub />

                  GitHub

                </button>

              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
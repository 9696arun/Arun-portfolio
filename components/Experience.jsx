"use client";

import { motion } from "framer-motion";

const experience = [

  {
    company: "Vault of Codes",
    role: "Full Stack Intern",
    year: "2025",
  },

  {
    company: "Skillbit Technologies",
    role: "Android Developer Intern",
    year: "2025",
  },

  {
    company: "C-DAC Noida",
    role: "Cyber Security Intern",
    year: "2025",
  },

];

export default function Experience() {

  return (

    <section id="experience">

      <h2 className="sectionTitle">
        Experience
      </h2>

      <div className="timeline">

        {experience.map((item, index) => (

          <motion.div
            key={index}
            className="timelineCard"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h3>
              {item.company}
            </h3>

            <p>
              {item.role}
            </p>

            <span>
              {item.year}
            </span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
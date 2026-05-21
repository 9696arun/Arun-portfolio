"use client";

import { motion } from "framer-motion";

const education = [

  {
    title:
      "B.Tech CSE",
    college:
      "Rajkiya Engineering College, Kannauj (AKTU)",
    year:
      "2023 - 2026",
  },

  {
    title:
      "Polytechnic Diploma (CSE)",
    college:
      "SR Group of Institutions, Jhansi (BTEUP)",
    year:
      "2020 - 2023",
  },

  {
    title:
      "12th CBSE",
    college:
      "Rajkiya Ashram Paddhati Inter College, Jhansi",
    year:
      "2020",
  },

  
  {
    title:
      "10th UP Board",
    college:
      "Rajkiya Ashram Paddhati Inter College, Jhansi",
    year:
      "2018",
  },

];

export default function Education() {

  return (

    <section id="education">

      <h2 className="sectionTitle">
        Education
      </h2>

      <div className="educationContainer">

        {education.map((item, index) => (

          <motion.div
            key={index}
            className="educationCard"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h3>
              {item.title}
            </h3>

            <p>
              {item.college}
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
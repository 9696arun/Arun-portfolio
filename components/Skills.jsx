"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST APIs",
    ],
  },

  {
    title: "AI / ML",
    items: [
      "TensorFlow",
      "OpenCV",
      "CNN",
      "Transformers",
      "Scikit-learn",
    ],
  },

  {
    title: "Tools",
    items: [
      "GitHub",
      "Docker",
      "Postman",
      "AWS",
      "Android Studio",
    ],
  },
];

export default function Skills() {

  return (

    <section id="skills">

      <h2 className="sectionTitle">
        Skills
      </h2>

      <div className="skillsContainer">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            className="skillCard"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h3>
              {skill.title}
            </h3>

            <div className="skillItems">

              {skill.items.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
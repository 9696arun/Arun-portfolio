"use client";

import { motion } from "framer-motion";

export default function About() {

  return (

    <section id="about">

      <motion.div
        className="glassCard"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <h2>
          About Me
        </h2>

        <p>

          I am Arun, a passionate Software Engineer
          and AI/ML Developer currently pursuing
          B.Tech in Computer Science Engineering.

          I specialize in building modern web
          applications, AI systems, secure
          communication platforms and responsive UI.

          My interests include:

          • AI/ML Development  
          • Cyber Security  
          • MERN Stack Development  
          • Android Development  
          • Cloud & APIs  

        </p>

      </motion.div>

    </section>
  );
}
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
          I am Arun, a passionate Software Engineer and AI/ML Developer 
          with a completed B.Tech in Computer Science Engineering.

          I have hands-on experience in Java with DSA, MERN Stack Development, 
          AI/ML systems, Android Development, and REST API integration.

          I enjoy building modern web applications, responsive user interfaces, 
          AI-powered solutions, and secure scalable platforms.

          My interests include:

          <br /><br />

          • AI/ML Development <br />
          • Java & Data Structures Algorithms <br />
          • MERN Stack Development <br />
          • Android Development <br />
          • Cyber Security <br />
          • Cloud & REST APIs

        </p>

      </motion.div>

    </section>
  );
}
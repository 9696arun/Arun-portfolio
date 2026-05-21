"use client";

import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {

  return (

    <section id="home" className="heroSection">

      {/* BACKGROUND GLOW */}

      <div className="heroGlow1"></div>
      <div className="heroGlow2"></div>

      <motion.div
        className="heroContent"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* LEFT SIDE */}

        <div className="heroLeft">

          <motion.span
            className="heroTag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >

            SOFTWARE ENGINEER • AI/ML • CYBER SECURITY

          </motion.span>

          <h1>

            Hi, I'm

            <span className="gradientText">
              {" "}Arun
            </span>

          </h1>

          <h2>

            <Typewriter
              words={[
                "Software Engineer",
                "AI/ML Developer",
                "Cyber Security Enthusiast",
                "MERN Stack Developer",
                "Android Developer",
              ]}
              loop
              cursor
            />

          </h2>

          <p className="heroDescription">

            Final Year Computer Science Engineering student
            passionate about AI/ML, Cyber Security,
            scalable backend systems and modern
            full-stack development.

            I love building secure, responsive and
            intelligent applications.

          </p>

          {/* BUTTONS */}

          <div className="heroButtons">

            <a href="/resume.pdf" download>

              <button className="primaryBtn">

                <FaDownload />

                Download Resume

              </button>

            </a>

            <a
              href="https://github.com/9696arun"
              target="_blank"
            >

              <button className="secondaryBtn">

                <FaGithub />

                View GitHub

              </button>

            </a>

            <a href="#projects">

              <button className="outlineHeroBtn">

                View Projects

                <FaArrowRight />

              </button>

            </a>

          </div>

          {/* SOCIAL LINKS */}

          <div className="heroSocials">

            <a
              href="https://github.com/9696arun"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/arun-arun-a51a94284/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/919598228821"
              target="_blank"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <motion.div
          className="heroRight"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >

          <div className="heroImageWrapper">

            <img
              src="/profile.png"
              alt="Arun"
              className="heroImage"
            />

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}
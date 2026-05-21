"use client";

import { motion } from "framer-motion";

import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certificates = [

  {
    title: "Cyber Security Internship",
    company: "C-DAC Noida",
    year: "2025",
  },

  {
    title: "Android Development Internship",
    company: "Skillbit Technologies",
    year: "2025",
  },

  {
    title: "Full Stack Development",
    company: "Vault of Codes",
    year: "2025",
  },

  {
    title: "AI / ML Projects",
    company: "Self Learning & Research",
    year: "2025",
  },

];

export default function Certificates() {

  return (

    <section id="certificates">

      <h2 className="sectionTitle">
        Certificates
      </h2>

      <div className="certificateContainer">

        {certificates.map((item, index) => (

          <motion.div
            key={index}
            className="certificateCard"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="certificateIcon">

              <FaCertificate />

            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.company}
            </p>

            <span>
              {item.year}
            </span>

            <button className="certificateBtn">

              <FaExternalLinkAlt />

              View Certificate

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
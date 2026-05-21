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

    pdf: "/cyber CIRTI.pdf",
  },

  {
    title: "Android Development Internship",

    company: "Skillbit Technologies",

    year: "2025",

    pdf: "/Android cirti.pdf",
  },

  {
    title: "Full Stack Development",

    company: "Vault of Codes",

    year: "2025",

    pdf: "/CERTIFICATE.pdf",
  },

  {
    title: "CCC - Course on Computer Concepts",

    company:
      "NIELIT (National Institute of Electronics & Information Technology)",

    year: "2021",

    pdf: "/CCC CIRTI _signed.pdf"
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

            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="certificateBtn">

                <FaExternalLinkAlt />

                View Certificate

              </button>

            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
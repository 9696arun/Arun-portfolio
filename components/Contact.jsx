"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {

      const res = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),

      });

      const data = await res.json();

      if (data.success) {

        alert("Message Sent Successfully");

        e.target.reset();

      } else {

        alert("Failed To Send Message");

      }

    } catch (error) {

      alert("Server Error");

    }

    setLoading(false);

  }

  return (

    <section id="contact">

      <h2 className="sectionTitle">
        Contact Me
      </h2>

      <div className="contactContainer">

        {/* LEFT */}

        <motion.div
          className="contactInfo"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h3>
            Let's Work Together 🚀
          </h3>

          <p>

            Interested in AI/ML, Cyber Security,
            Full Stack Development or modern web
            applications?

            Feel free to contact me anytime.

          </p>

          <div className="contactLinks">

            <a
              href="mailto:arun95arun9120@gmail.com"
              target="_blank"
            >

              <FaEnvelope />

              arun95arun9120@gmail.com

            </a>

            <a
              href="https://wa.me/919598228821"
              target="_blank"
            >

              <FaWhatsapp />

              9598228821

            </a>

            <a
              href="https://github.com/9696arun"
              target="_blank"
            >

              <FaGithub />

              GitHub Profile

            </a>

            <a
              href="https://www.linkedin.com/in/arun-arun-a51a94284/"
              target="_blank"
            >

              <FaLinkedin />

              LinkedIn Profile

            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.form
          className="contactFormModern"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">

            {loading
              ? "Sending..."
              : "Send Message"}

          </button>

        </motion.form>

      </div>

    </section>
  );
}
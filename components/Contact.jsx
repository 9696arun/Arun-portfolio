"use client";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  const form = useRef();

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    // GET EMAIL

    const email =
      e.target.user_email.value.trim();

    // PROFESSIONAL EMAIL VALIDATION

    const validEmailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|in|edu|ac|net|gov|co|us)$/i;

    if (!validEmailRegex.test(email)) {

      alert(
        "Only valid professional emails are allowed ❌"
      );

      setLoading(false);

      return;
    }

    // BLOCK TEMP / FAKE EMAILS

    const blockedDomains = [

      "tempmail.com",
      "10minutemail.com",
      "mailinator.com",
      "fake.com",
      "trashmail.com",
      "guerrillamail.com",

    ];

    const domain =
      email.split("@")[1];

    if (
      blockedDomains.includes(domain)
    ) {

      alert(
        "Temporary or fake emails are not allowed ❌"
      );

      setLoading(false);

      return;
    }

    // COOLDOWN PROTECTION

    const lastSent =
      localStorage.getItem("lastSent");

    if (
      lastSent &&
      Date.now() - lastSent < 60000
    ) {

      alert(
        "Please wait 1 minute before sending another message ⏳"
      );

      setLoading(false);

      return;
    }

    // SEND EMAIL

    emailjs.sendForm(

      "service_9yhn4i6",

      "template_ymo4bu8",

      form.current,

      "mtaEzqT3Zbue1uvCj"

    )

    .then(() => {

      alert(
        "Message Sent Successfully 🚀"
      );

      localStorage.setItem(
        "lastSent",
        Date.now()
      );

      form.current.reset();

      setLoading(false);

    })

    .catch((error) => {

      console.log(error);

      alert(
        "Failed To Send Message ❌"
      );

      setLoading(false);

    });

  }

  return (

    <section id="contact">

      <h2 className="sectionTitle">
        Contact Me
      </h2>

      <div className="contactContainer">

        {/* LEFT SIDE */}

        <motion.div

          className="contactInfo"

          initial={{
            opacity: 0,
            x: -80
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.8
          }}

        >

          <h3>
            Let's Work Together 🚀
          </h3>

          <p>

            Interested in AI/ML,
            Cyber Security,
            Full Stack Development
            or modern web applications?

            Feel free to contact me
            anytime.

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

        {/* RIGHT SIDE */}

        <motion.form

          ref={form}

          className="contactFormModern"

          onSubmit={handleSubmit}

          initial={{
            opacity: 0,
            x: 80
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.8
          }}

        >

          {/* NAME */}

          <input

            type="text"

            name="user_name"

            placeholder="Your Name"

            required

          />

          {/* EMAIL */}

          <input

            type="email"

            name="user_email"

            placeholder="Professional Email"

            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|in|edu|ac|net|gov|co|us)$"

            required

          />

          {/* MESSAGE */}

          <textarea

            name="message"

            rows="6"

            placeholder="Your Message"

            required

          ></textarea>

          {/* BUTTON */}

          <button type="submit">

            {
              loading
              ? "Sending..."
              : "Send Message"
            }

          </button>

        </motion.form>

      </div>

    </section>
  );
}
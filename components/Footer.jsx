"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footerTop">

        <div>

          <h2>
            Arun.
          </h2>

          <p>

            AI/ML Developer • Cyber Security •
            MERN Stack • Android Development

          </p>

        </div>

        <div className="footerSocials">

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
            href="https://www.instagram.com/ak_47_arun_kumar_/"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@ak47mylmultitaskingnetwork24"
            target="_blank"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/919598228821"
            target="_blank"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

      <div className="footerBottom">

        <p>
          © 2026 Arun Portfolio.
          All Rights Reserved.
        </p>

        <p>
          Made with ❤️ by Arun
        </p>

      </div>

    </footer>
  );
}
"use client";

import { useState, useEffect } from "react";

import { Link } from "react-scroll";

import {
  Menu,
  X,
} from "lucide-react";

import {
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <nav
      className={
        scrolled
          ? "navbar navbarScroll"
          : "navbar"
      }
    >

      {/* LOGO */}

      <div className="logo">

        <span className="logoBlue">
          Arun
        </span>

        <span className="logoDot">
          .
        </span>

      </div>

      {/* MOBILE MENU */}

      <div
        className="mobileMenu"
        onClick={() => setOpen(!open)}
      >

        {open ? <X size={30} /> : <Menu size={30} />}

      </div>

      {/* NAV LINKS */}

      <ul
        className={
          open
            ? "navLinks active"
            : "navLinks"
        }
      >

        {[
          "home",
          "about",
          "skills",
          "projects",
          "experience",
          "education",
          "certificates",
          "contact",
        ].map((item, index) => (

          <li key={index}>

            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
            >

              {item.charAt(0).toUpperCase() +
                item.slice(1)}

            </Link>

          </li>

        ))}

      </ul>

      {/* RIGHT BUTTONS */}

      <div className="navButtons">

        <a
          href="https://github.com/9696arun"
          target="_blank"
        >

          <button className="githubBtn">

            <FaGithub />

            GitHub

          </button>

        </a>

        <a
          href="https://wa.me/919598228821"
          target="_blank"
        >

          <button className="whatsappNavBtn">

            <FaWhatsapp />

            WhatsApp

          </button>

        </a>

      </div>

    </nav>
  );
}
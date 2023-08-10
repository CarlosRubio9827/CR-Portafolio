import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const links = {
    twitter: "https://twitter.com/rubiogallegoc/",
    github: "https://github.com/CarlosRubio9827/",
    linkedin:
      "https://www.linkedin.com/in/carlos-alberto-rubio-gallego-bb91b6176/",
    instagram: "https://www.instagram.com/carlos_rubio_gallego/",
    mailto: "mailto:rubiogallegoc@gmail.com"
  };
  const currentYear = new Date().getFullYear()
  const openNewTab = (page) => {
    window.open(page, "_blank", "noreferrer");
    // window.location.href = page;
  };
  return (
    <section id="contact">
      <div className="contact-me">
        <h2 className="contact-me-message">Send me a message!</h2>
        <p className="contact-me-desc">
          Have a question or proposal, or simply want to say hello? Feel free to
          reach out!
        </p>
        <div className="contact-me-container">
          <Link
            className="contact-me-container-a"
            to="#"
            onClick={() => {
              openNewTab(links.mailto);
            }}
          >
            Say Hello!
            {/* <MdEmail className="contact-me-container-img" /> */}
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p>&#169; Carlos Rubio - {currentYear}</p>
        <span className="footer-separate"></span>
        <ul className="footer-ul">
          <li className="footer-ul-li">
            <Link
              to="#"
              onClick={() => {
                openNewTab(links.twitter);
              }}
            >
              <BsTwitter className="footer-ul-li-a-img" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                openNewTab(links.github);
              }}
            >
              <BsGithub className="footer-ul-li-a-img" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                openNewTab(links.linkedin);
              }}
            >
              <BsLinkedin className="footer-ul-li-a-img" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                openNewTab(links.instagram);
              }}
            >
              <BsInstagram className="footer-ul-li-a-img" />
            </Link>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;

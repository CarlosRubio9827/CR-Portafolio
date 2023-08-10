import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

const About = () => {
  const links = {
    piedraCanada: "https://piedradelcanadadtr.com",
    valhallaSeries: "https://valhallaseries.co",
    qvision: "https://qvisiontechnologies.com/en/home/",
    minsait: "https://www.minsait.com/en/",
  };

  const technologies = [
    {
      src: "https://i.ibb.co/kKw8wC6/Quality-Assurance-1-2048x944.png",
      alt: "Quality Assurance",
    },
    {
      src: "https://i.ibb.co/NnRmsJC/HTML5-logo-and-wordmark-svg.png",
      alt: "HTML5 Logo",
    },
    {
      src: "https://i.ibb.co/3d8FTZJ/CSS3-logo-and-wordmark-svg.png",
      alt: "CSS3 Logo",
    },
    {
      src: "https://i.ibb.co/FBNCpLP/800px-Sass-Logo-Color-svg.png",
      alt: "Sass Logo",
    },
    {
      src: "https://i.ibb.co/g6XP5c2/Java-Script-logo.png",
      alt: "JavaScript Logo",
    },
    {
      src: "https://i.ibb.co/3Ryc9N7/1631110818-logo-react-js.png",
      alt: "React.js Logo",
    },
    {
      src: "https://i.ibb.co/9gRwTph/1200px-Node-js-logo-svg.png",
      alt: "Node.js Logo",
    },
    {
      src: "https://i.ibb.co/TYMspvH/git.png",
      alt: "Git Logo",
    },
    {
      src: "https://i.ibb.co/QMwd8h0/kisspng-microsoft-sql.jpg",
      alt: "Microsoft SQL",
    },
    {
      src: "https://i.ibb.co/syr9tPS/cypress-logo-circle-dark.png",
      alt: "Cypress Logo",
    },
  ];
  const openNewTab = (page) => {
    window.open(page, "_blank", "noreferrer");
    // window.location.href = page;
  };
  return (
    <section id="about" className="about">
      <h2>
        01.<span>About Me</span>
      </h2>
      <div className="about-content">
        <p className="about-content-text">
          Hello, I'm Carlos Alberto Rubio Gallego, and I'm passionate about
          solving problems through software development. During my university
          years, I discovered the incredible potential that this field has to
          enhance people's daily lives.
        </p>
        <br />
        <p className="about-content-text">
          My experience as a Web Developer at{" "}
          <Link
            onClick={() => {
              openNewTab(links.valhallaSeries);
            }}
            className="about-content-text-to"
            to="#"
          >
            Valhalla Series
          </Link>{" "}
          and{" "}
          <Link
            onClick={() => {
              openNewTab(links.piedraCanada);
            }}
            className="about-content-text-to"
            to="#"
          >
            Team Piedra del Canadá
          </Link>
          , along with my role as a Quality Analyst at{" "}
          <Link
            onClick={() => {
              openNewTab(links.qvision);
            }}
            className="about-content-text-to"
            to="#"
          >
            Q-Vision Technologies
          </Link>{" "}
          and my current position as a Software Engineer at{" "}
          <Link
            onClick={() => {
              openNewTab(links.minsait);
            }}
            className="about-content-text-to"
            to="#"
          >
            Minsait
          </Link>
          , has been an exciting journey of learning and growth. I have designed
          and developed web applications, managed requirements, executed tests,
          and evaluated results. My main focus is on creating accessible and
          inclusive digital products to make a positive impact on people's
          lives.
        </p>
      </div>
      <br />
      <div className="about-skills">
        <p className="about-skills-title">
          Here is a list of the latest tools I have been working with lately:
        </p>
        <div className="about-skills-content">
          {technologies.map((i, j) => {
            return (
              <div key={j} className="card">
                <img className="card-img" src={i.src} alt={i.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

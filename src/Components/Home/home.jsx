import React from "react";
// import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <section id="home">
      <div className="home">
        <div className="home-name">
          <h1>
            HI, MY NAMES IS <span>CARLOS RUBIO</span>
          </h1>
        </div>
        <div className="home-title">
          <h2>
            Frontend Developer<span>.</span>
          </h2>
        </div>
        <div className="home-desc">
          <p className="home-desc-p">
            I am an experienced software developer skilled in agile methodologies, database design (MySQL), and web development (HTML, CSS, JavaScript, PHP, Python, Java). I also have expertise in quality assurance and software testing. With a proven track record of successful project delivery, I am a valuable asset to any software development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

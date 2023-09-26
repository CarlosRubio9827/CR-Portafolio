import React from "react";
// import { Link } from "react-router-dom";
import "./home.scss";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  const handleDownloadClick = () => {
    // Aquí puedes proporcionar la URL de tu archivo PDF
    const pdfUrl ='https://drive.google.com/file/d/1nJpL-wn7y8gVBrPMz2K2hdFcPDoQpczl/view?usp=sharing';

    // Crea un elemento de enlace temporal
    // const link = document.createElement("a");
    // link.href = pdfUrl;

    // Establece el atributo "download" para indicar la descarga
    // link.setAttribute("download", "Carlos Rubio - Quality Analyst • Testing Resume.pdf");

    // Simula un clic en el enlace
    // document.body.appendChild(link);
    // link.click();
    window.open(pdfUrl, "_blank", "noreferrer");

    // Limpia el enlace temporal
    // document.body.removeChild(link);
  };

  return (
    <section id="home">
      <div className="home">
        <div className="home-name">
          <h1>
            HI, MY NAME IS <span>CARLOS RUBIO</span>
          </h1>
        </div>
        <div className="home-title">
          <h2>
            Frontend Developer<span>.</span>
          </h2>
        </div>
        <div className="home-desc">
          <p className="home-desc-p">
            I am an experienced software developer skilled in agile
            methodologies, database design (MySQL), and web development (HTML,
            CSS, JavaScript, PHP, Python, Java). I also have expertise in
            quality assurance and software testing. With a proven track record
            of successful project delivery, I am a valuable asset to any
            software development team.
          </p>
        </div>
        <div className="home-cv">
          <Link className="home-cv-a" to={"#"} onClick={handleDownloadClick}>
            <BsDownload className="home-cv-a-icon" />
            RESUME
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

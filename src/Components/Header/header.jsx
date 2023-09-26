import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHeaderVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toogleMenu = (event, targetId) => {
    const menu = document.getElementsByClassName("header-menu");
    menu[0].classList.toggle("x");
    const header = document.getElementsByClassName("header");
    header[0].classList.toggle("x");
    const hamburguer = document.getElementsByClassName("header-hamburguer");
    hamburguer[0].classList.toggle("x");
    const body = document.getElementsByTagName("body");
    body[0].classList.toggle("overflowBody");

    const imgLogo = document.getElementsByClassName("header-img");
    imgLogo[0].classList.toggle("x");

    event?.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Activa el desplazamiento suave
      });
    }
  };

  return (
    <header className={`header ${isHeaderVisible ? "" : "hidden"}`}>
      {/* <img className="header-img" src="https://i.imgur.com/0S1gQlF.png" /> */}
      <div className="header-img"></div>
      <button
        onClick={() => {
          toogleMenu();
        }}
        className="header-hamburguer"
      ></button>
      {/* <div className="header-hamburguer">
        x
      </div> */}
      <div className="header-menu">
        <ul className="header-menu-ul">
          {/* <li className="header-menu-ul-li">
            <Link
              className="header-menu-ul-li-link"
              // onClick={() => {
              //   toogleMenu();
              // }}
              onClick={(e) => toogleMenu(e, "#home")}
              to="#"
            >
              <span className="header-ul-li-link-sp">01</span> Home
            </Link>
          </li> */}
          <li className="header-menu-ul-li">
            <Link
              className="header-menu-ul-li-link"
              onClick={(e) => toogleMenu(e, "#about")}
              to="#"
            >
              <span className="header-ul-li-link-sp">01</span> About
            </Link>
          </li>
          <li className="header-menu-ul-li">
            <Link
              className="header-menu-ul-li-link"
              onClick={(e) => toogleMenu(e, "#experience")}
              to="#"
            >
              <span className="header-ul-li-link-sp">02</span> Experience
            </Link>
          </li>
          <li className="header-menu-ul-li">
            <Link
              className="header-menu-ul-li-link"
              onClick={(e) => toogleMenu(e, "#projectContainer")}
              to="#"
            >
              <span className="header-ul-li-link-sp">03</span> Projects
            </Link>
          </li>
          <li className="header-menu-ul-li">
            <Link
              className="header-menu-ul-li-link"
              onClick={(e) => toogleMenu(e, "#contact")}
              to="#"
            >
              <span className="header-ul-li-link-sp">04</span> Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const toogleMenu = () => {
    const menu = document.getElementsByClassName("header-menu");
    console.log(menu[0]);
    menu[0].classList.toggle("x");
    const header = document.getElementsByClassName("header");
    console.log(header[0]);
    header[0].classList.toggle("x");
    const hamburguer = document.getElementsByClassName("header-hamburguer");
    console.log(header[0]);
    hamburguer[0].classList.toggle("x");
    const body = document.getElementsByTagName("body");
    console.log(header[0]);
    body[0].classList.toggle("overflowBody");

    const imgLogo = document.getElementsByClassName("header-img");
    console.log(imgLogo[0]);
    imgLogo[0].classList.toggle("x");
  };

  return (
    <header className="header">
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
          <li className="header-menu-ul-li">
            <Link className="header-menu-ul-li-link" to="#">
              <span className="header-ul-li-link-sp">01</span> Home
            </Link>
          </li>
          <li className="header-menu-ul-li">
            <Link className="header-menu-ul-li-link" to="#">
              <span className="header-ul-li-link-sp">02</span> About
            </Link>
          </li>
          <li className="header-menu-ul-li">
            <Link className="header-menu-ul-li-link" to="#">
              <span className="header-ul-li-link-sp">03</span> Projects
            </Link>
          </li>
          <li className="header-menu-ul-li">
            <Link className="header-menu-ul-li-link" to="#">
              <span className="header-ul-li-link-sp">04</span> Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

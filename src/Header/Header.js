import React, { useState } from "react";
import "./Header.css";
import hamburgerIcon from "../images/hamburger-menu-icon-white-7.jpg";
import closeIcon from "../images/close-white.png";
import logo from "../images/React_Movies.png";
import { Link } from "react-router-dom";
import Search from "../Home/Search/Search";

function Header(props) {
  let hamburgerStatus = false;
  const [hamburgerIconStatus, setHamburgerIconStatus] = useState(hamburgerIcon);

  const hamburgerHandler = () => {
    hamburgerStatus = !hamburgerStatus;
    let hamburgerNav = document.querySelector("#hamburger-navigation");

    if (hamburgerStatus) {
      hamburgerNav.style.display = "block";
      setHamburgerIconStatus(closeIcon);
    } else {
      hamburgerNav.style.display = "none";
      setHamburgerIconStatus(hamburgerIcon);
    }
  };

  return (
    <div className="container header">
      <div className="hamburger">
        <img
          className="hamburger-icon"
          onClick={hamburgerHandler}
          src={hamburgerIconStatus}
        />
        <ul className="hamburger-navigation" id="hamburger-navigation">
          {props.pages.map((page) => {
            return (
              <li className="nav-pg" key={page.anchor}>
                <Link to={page.anchor}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="navigation">
        {props.pages.map((page) => {
          return (
            <li className="nav-pg" key={page.anchor}>
              <Link to={page.anchor}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
      <Search></Search>
      <img className="logo" src={logo} />
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../img/logo.png";

import Menu from "./Menu";

function Header(props) {
  function handleMenuClick(e) {
    e.preventDefault();
    props.handleMenuClick();
  }
  return (
    <header>
      <Link to="/">
        <img className="logo-img" src={logo} />
      </Link>
      <span className="title">COZ Shopping</span>
      <div className="burger">
        <div className="menuIcon" onClick={handleMenuClick}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
        {props.isMenuCilck ? <Menu /> : null}
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.component.styles.scss";
import { ReactComponent as Logo } from "../assets/crown.svg";
export const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

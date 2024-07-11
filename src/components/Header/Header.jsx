import logo from "../../assets/logo/Cook-Next_Door-Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Header.scss";

import Cart from "../../assets/icons/cart.png";

export default function Header() {
  const location = useLocation();
  return (
    <header className="header__background">
      <div className="header">
        <Link to={"/warehouses"} className="header__logoLink">
          <img className="header__logo" src={logo} alt="instock logo" />
        </Link>
        <nav className="nav">
          <NavLink
            className={({ isActive }) =>
              "nav__item" +
              (isActive || location.pathname === "/"
                ? " nav__item--active"
                : "")
            }
            to={"/homePage"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__item" + (isActive ? " nav__item--active" : "")
            }
            to={"/homePage"}
          >
            Cooks
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__item" + (isActive ? " nav__item--active" : "")
            }
            to={"/homePage"}
          >
            AboutUs
          </NavLink>
        </nav>
        <img className="header__cart" src={Cart} alt="cart icon" />
      </div>
    </header>
  );
}

import React from "react";
import logo from "../../assets/logo/Cook-Next_Door-Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

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
            to={"/about"}
          >
            Cooks
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav__item" + (isActive ? " nav__item--active" : "")
            }
            to={"/about"}
          >
            AboutUs
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

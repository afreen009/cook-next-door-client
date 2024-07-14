import logo from "../../assets/logo/Cook-Next_Door-Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Header.scss";
import CartIcon from "../../assets/icons/cart.png";

export default function Header({ cart, removeFromCart }) {
  const dataToSend = { cart: cart, removeFromCart: removeFromCart };

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
            to={"/aboutUs"}
          >
            AboutUs
          </NavLink>
          <NavLink to={"/cart"} state={dataToSend}>
            <img className="header__cart" src={CartIcon} alt="cart icon" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

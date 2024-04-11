import shreksFace from "../../assets/shreksFace.png";
import BurgerMenuToggle from "../menu/BurgerMenu";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useHeaderContext } from "../../contexts/HeaderContext";

const Header = () => {
  const { menu } = useHeaderContext();
  return (
    <header className="header">
      <div className="logoMenu">
        <div>
          <NavLink to="/ ">
            <img className="App-logo" src={shreksFace} alt="logo" />
          </NavLink>
        </div>
        <div className="menu">
          <BurgerMenuToggle />
          <ul className={menu}>
            <li>
              <NavLink to="/about" onClick={BurgerMenuToggle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={BurgerMenuToggle}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/images" onClick={BurgerMenuToggle}>
                Images
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" onClick={BurgerMenuToggle}>
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/weather" onClick={BurgerMenuToggle}>
                Weather
              </NavLink>
            </li>
            <li>
              <NavLink to="/cat" onClick={BurgerMenuToggle}>
                Cat
              </NavLink>
            </li>
            <li>
              <NavLink to="/exercise" onClick={BurgerMenuToggle}>
                Exercise
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

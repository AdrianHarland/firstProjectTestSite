import shreksFace from "../../assets/shreksFace.png";
import BurgerMenu from "../menu/BurgerMenu";
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
          <BurgerMenu />
          <ul className={menu}>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/images">Images</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/weather">Weather</NavLink>
            </li>
            <li>
              <NavLink to="/cat">Cat</NavLink>
            </li>
            <li>
              <NavLink to="/exercise">Exercise</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

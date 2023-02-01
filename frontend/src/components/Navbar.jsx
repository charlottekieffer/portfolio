import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "../assets/styles/navbar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../assets/logo-perso.png";

const breakpoint = 992;

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > breakpoint) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    let oldValue = 0;
    let newValue = 0;

    window.addEventListener("scroll", () => {
      // Get the new Value
      newValue = window.scrollY;

      if (oldValue - newValue < 0) {
        setShow(false);
      } else if (oldValue - newValue > 0) {
        setShow(true);
      }

      // Update the old value
      oldValue = newValue;
    });

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="nav-bar" style={show ? { top: 0 } : { top: -150 }}>
      {toggleMenu === false ? (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <RxHamburgerMenu className="menuIcon" />
        </button>
      ) : (
        <button type="button" onClick={toggleNavSmallScreen} className="btn">
          <RxCross1 className="menuIcon" />
        </button>
      )}
      <Link to="/">
        <img className="logo" alt="Logo" src={logo} />
      </Link>
      {(toggleMenu || width > breakpoint) && (
        <ul className="list">
          <li className="items">Présentation</li>
          <li className="items">Projets</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <div className="button-right">
        <Link to="/login">
          <CgProfile className="profile" />
        </Link>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { Link } from "gatsby";

export default function Menu({ setPriceModalOpen }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="header-top-mobileMenu">
        <button
          type="button"
          className={
            open
              ? "header-top-mobileMenu-burgerMenu header-top-mobileMenu-burgerMenu-open"
              : "header-top-mobileMenu-burgerMenu"
          }
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="header-top-mobileMenu-burgerMenu-item"></span>
          <span className="header-top-mobileMenu-burgerMenu-item"></span>
          <span className="header-top-mobileMenu-burgerMenu-item"></span>
        </button>
        <nav
          className={
            open
              ? "header-top-mobileMenu-nav header-top-mobileMenu-nav-open"
              : "header-top-mobileMenu-nav"
          }
        >
          <ul onMouseLeave={() => setOpen(false)}>
            <li>
              <Link className="header-top-mobileMenu-nav-item" to="#massage">
                Massages
              </Link>
            </li>
            <button
              className="header-top-mobileMenu-nav-item"
              onClick={() => setPriceModalOpen((prev) => !prev)}
            >
              Tarifs
            </button>
            <li>
              <Link className="header-top-mobileMenu-nav-item" to="#contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="header-top-nav">
        <Link className="header-top-nav-link" to="#massage">
          Massages
        </Link>
        <button
          className="header-top-nav-link"
          onClick={() => setPriceModalOpen((prev) => !prev)}
        >
          Tarifs
        </button>
        <Link className="header-top-nav-link" to="#contact">
          Contact
        </Link>
      </nav>
    </>
  );
}

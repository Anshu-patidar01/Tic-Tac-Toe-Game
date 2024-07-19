import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  custom__nav-bg_color">
        <div className="container-fluid custom__nav-bg_color">
          <a className="navbar-brand custom__nav-text_color" href="#">
            <h3>
              <span>Tik Tac </span> Game
            </h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                to={"/"}
                className="nav-link ms-3 custom__nav-text_color"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to={"/guid"}
                className="nav-link ms-3 custom__nav-text_color"
              >
                Guid
              </Link>

              <Link
                to={"/about"}
                className="nav-link ms-3 custom__nav-text_color"
              >
                About Us
              </Link>

              <Link
                to={"/login"}
                type="button"
                className=" nav-link btn btn-primary custom__nav-text_color"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

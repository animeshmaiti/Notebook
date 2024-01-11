import React from "react";
import { NavLink,Link } from "react-router-dom";

function Navbar(props) {
  const navStyle = props.myTheme;
  const toggleBtn = props.toggleStyle;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="theme"
                onChange={toggleBtn}
              />
              <label htmlFor="theme">{navStyle.btnText}</label>
            </div>
            <Link className="btn btn-primary mx-1" to="/login" role="button" >Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button" >Sign Up</Link>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

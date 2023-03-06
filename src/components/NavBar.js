import React from "react";
import logoImage from "./../images/film-reel-36155.png";

// { useEffect }
import { Link, NavLink, useLocation } from "react-router-dom";

//import Card from "./Card";
import classes from "./NavBar.module.css";

const classesFunction = (obj) => {
  let { isActive } = obj;
  return isActive
    ? `    ${classes.link}  ${classes.active}  `
    : `   ${classes.link} `;
};

const CustomClassesFunction = (obj) => {
  let { isActive } = obj;
  return isActive
    ? `  ${classes.link} ${classes.active} ${classes.customLogin}  `
    : `   ${classes.link} ${classes.customLogin} `;
};

const NavBar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);

  return (
    <>
 
      {currentUrl !== `/Auth` && (     <nav
        className={`navbar navbar-expand-lg   navbar-dark  ${classes.fontWhite} ${classes.big_container}`}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <div className={`${classes.logo} navbar-brand mr-5`} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav pr-0">
              <div className={classes.first_container}>
                <div className={classes.second_container}>
                  <li class="nav-item mr-2">
                    <NavLink className={classesFunction} to="/">
                      home
                    </NavLink>
                  </li>
                  <li className={`nav-item  ${classes.fontWhite} text-white`}>
                    <NavLink className={classesFunction} to="/movies">
                      movies
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className={classesFunction} to="/tv-shows">
                      tv-shows
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className={classesFunction} to="/people">
                      people
                    </NavLink>
                  </li>
                  <li class="nav-item pl-5">
                    <NavLink className={CustomClassesFunction} to="/Auth">
                      Login
                    </NavLink>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      )}
    </>
  );
};

export default NavBar;

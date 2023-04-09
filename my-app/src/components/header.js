import React from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Header() {
  // console.log(prop)
  return (
    <div
     style={{
      padding:"0 3rem",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      zIndex:"100"
     }}
>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          StudyBot by LearnGPT
        </a>
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li> */}
            <li className="nav-item dropdown ">
              {/* <a className="nav-link dropdown-toggle" href="!#" role="button" data-bs-toggle="dropdown" aria-current="page">
              Courses
            </a> */}
              {/* <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="!#">Action</a></li>
              <li><a className="dropdown-item" href="!#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="!#">Something else here</a></li>
            </ul> */}
              <a className="nav-link" href="/courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/login">
                Login
              </a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search for courses" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
      </div>
    </nav>
    </div>

  );
}

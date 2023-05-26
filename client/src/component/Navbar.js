import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <h3 className="font-weight-bold font-italic" style={{color: "goldenrod"}}>Certicryp</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item active">
              <Link
                className="nav-link"
                to="/owner"
                style={{ marginRight: 20, marginTop: 4 }}
              >
                <h5>Owner Login</h5>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/university"
                style={{ marginRight: 20, marginTop: 4 }}
              >
                <h5>University</h5> <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active  ">
              <Link
                className="nav-link"
                to="/"
                style={{ marginRight: 20, marginTop: 4 }}
              >
                <h5>Certificate Holder Login</h5>
              </Link>
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

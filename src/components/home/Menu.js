/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/logo.png";
import path from "../../assets/path.png";
import "../../style/menu.css";

function Menu() {
  return (
    <nav class="navbar  navbar-expand-lg d-flex flex-column  bg-white navbar-dark   position-relative">
      <div className="container ">
        <a class="navbar-brand mb-4" href="#">
          <img className="logo" src={logo} alt="" />
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          type="button"
        >
          <span className="navbar-toggler-icon bg-dark"></span>
        </button>

        <div className="collapse navbar-collapse " id="navmenu">
          <ul className="navbar-nav ms-auto mb-3">
            <li className="navbar-item d-flex align-items-center ">
              <div class="lang-menu mt-0 mx-lg-4  d-flex align-items-center justify-content-between ">
                <div class="selected-lang ">English </div>
                <img className="ml-4" src={path} alt="dropdownFlech" />
                <ul>
                  <li>
                    <a href="#" className="de nav-link text-black ">
                      German
                    </a>
                  </li>
                  <li>
                    <a href="" className="en nav-link text-black">
                      English
                    </a>
                  </li>
                  <li>
                    <a href="" className="fr nav-link text-black">
                      French
                    </a>
                  </li>
                  <li>
                    <a href="" className="ar nav-link text-black">
                      Arabic
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="navbar-item ">
              <a href="#" className="nav-link text-black">
                Business
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link text-black">
                Help
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link text-black">
                Register
              </a>
            </li>
            <li className="btn navbar-item py-0">
              <button type="button" className="btn btn-primary navbar-btn px-4">
                {/* <span className="glyphicon glyphicon-plus"></span> */}
                sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container  d-none  d-lg-flex justify-content-end position-absolute bottom-0 pb-2">
        <ul className="d-flex list-unstyled mb-0 ">
          <li className="navbar-item  list-unstyled">
            <select name="options" className="border-0 bg-white  px-2" id="options">
              <option value="volvo">Uk trains</option>
              <option value="saab">first</option>
              <option value="opel">second</option>
              <option value="audi">theerd</option>
            </select>
          </li>
          <li className="navbar-item">
            <select name="options" className="border-0 bg-white  px-2" id="options">
              <option value="volvo">European trains</option>
              <option value="saab">first</option>
              <option value="opel">second</option>
              <option value="audi">theerd</option>
            </select>
          </li>
          <li className="navbar-item">
            <select name="options" className="border-0 bg-white  px-2" id="options">
              <option value="volvo">Train companies</option>
              <option value="saab">first</option>
              <option value="opel">second</option>
              <option value="audi">theerd</option>
            </select>
          </li>
          <li className="navbar-item">
            <select name="options" className="border-0 bg-white  px-2 " id="options">
              <option value="volvo">Popular journeys</option>
              <option value="saab">first</option>
              <option value="opel">second</option>
              <option value="audi">theerd</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;

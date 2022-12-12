import React, { useState } from "react";
import Addcart from "./Addcart";

import img13 from "./images/img13.png";

const Navbar = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.length === 0 || lastName.length === 0) {
      setError(true);
    }
    if (firstName && lastName) {
      console.log("first Name:", firstName, "Last Name:", lastName);
    }
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#"></a>
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
            <ul className="navbar-nav me-auto-">
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <img className="icons" src={img13} />
                <ul className="navbar-nav ">
                  <li className="pp rounded nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle active  fst-normal  color-warning fs-6 mx-2"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mobiles
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-light "
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          Popular Choice
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider " />
                      </li>
                      <li>
                        <a className="dropdown-item " href="#">
                          Iphone
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Samsung
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Oppo
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item  " href="#">
                          Google
                          <span className="position-absolute top-40 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Vivo
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div
                className="pp collapse navbar-collapse rounded"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active mx-1 fst-normal  fs-6"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Wears
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-light "
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item " href="#">
                          Women
                        </a>
                      </li>
                      <li>{/* <hr className="dropdown-divider" /> */}</li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Men{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Kids
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <li className="pp rounded nav-item">
                <a
                  className="nav-link active mx-1 fst-normal my-1 fs-6"
                  aria-current="page"
                  href="#"
                >
                  Appliances
                </a>
              </li>
              <li className="pp rounded nav-item">
                <a
                  id="menu"
                  className="nav-link active mx-1 my-1 fst-normal fs-6"
                  aria-current="page"
                  href="#"
                >
                  Toys
                </a>
              </li>
              <li className="pp rounded nav-item" id="">
                <a
                  className="nav-link active mx-1 my-1 fst-normal  fs-6"
                  aria-current="page"
                  href="#"
                >
                  Offers
                </a>
              </li>
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <form className="d-flex">
                  <input
                    className="s-bar form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <button
                className="hrt rounded text-danger border-2 my-1 "
                onClick={()=> props.gotofavourates("favourate")}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="red-heart bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </button>
            </ul>
            <Addcart />
            <button
              className="login btn btn-primary "
              href="Login"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

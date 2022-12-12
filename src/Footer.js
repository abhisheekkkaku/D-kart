import React from "react";
import footer_2 from "./images/footer_2.jpg";

import img13 from "./images/img13.png";

function Footer(props) {
  return (
    <div className="container-fluid bg-dark py-2 page-footer font-small special-color-light bg-light pt-4 ">
      <div className="container1-1 footer">
        <div className="row g-3">
          <div className="">
            <h3 className=" text-light font-weight-bold col-2 my-2">
              <img
                className="foot rounded-circle  mx-3 my-3"
                src={img13}
                width="70px"
              ></img>
              D Kart
            </h3>
          
          </div>
          <div className="card bg-light">
            <div className="">
              <div className="">
                <img src="" className="img-fluid rounded-start" alt="" />
              </div>
              
                <div className="card-body ">
                  <h5 className="card-title text-dark ">Stores in India</h5>
                  <p className="card-text text-dark">
                    New Delhi | Mumbai | Chennai | Pune | Noida | Gurgaon | Bangalore |Ahmedabad
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center text-light py-4 my-1">
        © 2020 Copyright:
        <a className=" text-light" href="/">
          {" "}
          D
        </a>
        <a className=" text-light " href="">
          {" "}
         Kart.com
        </a>
      </div>
    </div>
  );
}

export default Footer;

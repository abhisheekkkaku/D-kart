import React, { useState } from "react";

import download_1 from "./images/download_1.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img11 from "./images/img11.jpg";

const SearchList = (props) => {
  const [filters, setFilters] = useState({});

  const updateFilters = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div
        id="carouselExampleFade"
        className="slide carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img9} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img11} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container1">
        <div class="card">
          <div class="imgBx">
            <img src="https://assets.codepen.io/4164355/shoes.png" />
          </div>
          <div class="contentBx">
            <h2>Nike Shoes</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div class="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="bg-white-50 bg-gradient">
        
        <span
          id="box-size"
          className="sb border rounded-box rounded row fw-bold  text-dark fw-bold bg-dark rounded"
        >

          {/* <div className="border1">
          <h4>Filter Items</h4>
          {/* <div className="city fw-bold fs-6 my-1  text-dark">
            City
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-geo-alt mx-3 text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <input className="" name="location" onChange={updateFilters} />
          </div> */}

          {/* <div className="bgt fw-bold  fs-6 m-3  text-dark">
            Budget
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-currency-rupee mx-1 text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>
            <span className="mx-4 rounded  ">
              <select
                className=" my-2 w-25px h-25px"
                name="budget"
                id="specificSizeSelect"
                onChange={updateFilters}
              >
                <option select="true">
                  Choose...
                </option>
                <option value="4000-5000">Under 5000</option>
                <option value="4500-15000"> Under 15,000</option>
                <option value="15000-50000">Under 50,000</option>
                <option value="50000-100000">Under 1 Lakh</option>
              </select>
            </span>
          </div>

          // <div className="fw-bold fs-6 my-1  text-dark">
          //   Type
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width="14"
          //     height="14"
          //     fill="currentColor"
          //     className="bi bi-list-check text-dark mx-3"
          //     viewBox="0 0 16 16"
          //   >
          //     <path
          //       fillRule="evenodd"
          //       d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
          //     />
          //   </svg>
          //   <input
          //     className=""
          //     type="text"
          //     placeholder="Mobile, Appliances..."
          //     value={filters.propertyType}
          //     name="propertyType"
          //     onChange={updateFilters}
          //   />
          // </div> */}

          {/* <div className="fw-bold fs-6  my-1 text-dark">
            Property Size
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-aspect-ratio mx-2 text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
            </svg>
            <span className=" rounded col-3 my-3 ">
              <select className=" my-3" name="bhk" onChange={updateFilters}>
                <option className="btn-group" value="" select="true">
                  Choose...
                </option>
                <option value="1-3">1-3 bhk Parking</option>
                <option value="3-5">3-5 bhk Parking</option>
                <option value="5+">5+ Parking</option>
              </select>
            </span>
          </div> */}
          {/* </div> */} 

          {/* <div className="">
            <button
              className="s-b btn btn-dark bg-success rounded-pill "
              onClick={() => props.search({ filters })}
            >Search</button>
          </div> */}
        </span>
      </div>
    </>
  );
};

export default SearchList;

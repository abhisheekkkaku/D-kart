import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.png";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";

const SmallCards = () => {
  return (
    <div className=" container experience text-decoration-none row my-3 mx-5">
    <div className="sm col-1 mx-4">
      <span href="">
        <img className="imgs" src={img1} alt="alt=" width="90px" height="90px" />
        <p className="text-center mx-2">Fruits</p>
      </span>
    </div>
    <div className="sm col-1 mx-5">
      <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
        <img className="imgs" src={img2} alt="" width="90px" height="90px" />
        <p className="text-center">Machines</p>
      </span>
    </div>
    <div className="sm col-1 mx-5">
      <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
        <img className="imgs" src={img3} alt="" width="90px" height="90px" />
        <p className="text-center mx-1">Toys</p>
      </span>
    </div>
    <div className="sm col-1 mx-4">
      <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
        <img className="imgs" src={img4} alt="" width="90px" height="90px" />
        <p className="text-center mx-1">Clothes</p>
      </span>
    </div>
    <div className="sm col-1 mx-4">
      <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
        <img className="imgs" src={img5} alt="" width="90px" height="90px" />
        <p className="text-center ">Offers</p>
      </span>
    </div>
    <div className="sm col-1 mx-4">
      <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
        <img className="imgs" src={img6} alt="" width="90px" height="90px" />
        <p className="text-center mx-3">Taxes</p>
      </span>
    </div>
    <div className="sm col-1 mx-4">
      <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
        <img className="imgs" src={img7} alt="" width="90px" height="90px" />
        <p className="text-center">Travel</p>
      </span>
    </div>
  </div>
  );
};

export default SmallCards;

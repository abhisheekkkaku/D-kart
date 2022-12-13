import React from "react";
import Card from "react-bootstrap/Card";

export default function ProductDetails(props) {
  return (
    <div>
      <div className=" rounded row mx-5 m-3 ">
        <div className=" rounded  " key={props.product.Id}>
          <Card className="dlt inner" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.product.URL} />
            <Card.Body>
              <Card.Title className="bg-light">
                {props.product.Title}
              </Card.Title>
              <Card.Text>{props.product.Type}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <button className="goto" onClick={() => props.gotofavourates("main")}>
        Go To Product List
      </button>
      <button
        className="goto"
        onClick={() => props.addToCart(props.product.Id)}
      >
        Add To Cart
      </button>
    </div>
  );
}

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  const [background, setBackground] = useState("text-dark");

  const changeColor = () => {
    setBackground("bg-primary");
  };

  return (
    <div className=" rounded row m-5 ">
      {props.properties.map((card) => (
        <div className=" card-size p-2 col my-2 rounded  " key={card.Title}>
          <Card className="bcd inner bg-light " style={{ width: "10rem" }}>
            <Card.Img variant="top" src={card.URL} />
            <Card.Body>
              <p className="">
                {" "}
                <Card.Title className={background}>{card.Title}</Card.Title>
                <Card.Text>{card.Text}</Card.Text>
                <fieldset class="rating">
                  <input type="radio" id="star5" name="rating" value="5" />
                  <label
                    class="full"
                    for="star5"
                    title="Awesome - 5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star4half"
                    name="rating"
                    value="4 and a half"
                  />
                  <label
                    class="half"
                    for="star4half"
                    title="Pretty good - 4.5 stars"
                  ></label>
                  <input type="radio" id="star4" name="rating" value="4" />
                  <label
                    class="full"
                    for="star4"
                    title="Pretty good - 4 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star3half"
                    name="rating"
                    value="3 and a half"
                  />
                  <label
                    class="half"
                    for="star3half"
                    title="Meh - 3.5 stars"
                  ></label>
                  <input type="radio" id="star3" name="rating" value="3" />
                  <label class="full" for="star3" title="Meh - 3 stars"></label>
                  <input
                    type="radio"
                    id="star2half"
                    name="rating"
                    value="2 and a half"
                  />
                  <label
                    class="half"
                    for="star2half"
                    title="Kinda bad - 2.5 stars"
                  ></label>
                  <input type="radio" id="star2" name="rating" value="2" />
                  <label
                    class="full"
                    for="star2"
                    title="Kinda bad - 2 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star1half"
                    name="rating"
                    value="1 and a half"
                  />
                  <label
                    class="half"
                    for="star1half"
                    title="Meh - 1.5 stars"
                  ></label>
                  <input type="radio" id="star1" name="rating" value="1" />
                  <label
                    class="full"
                    for="star1"
                    title="Sucks big time - 1 star"
                  ></label>
                  <input
                    type="radio"
                    id="starhalf"
                    name="rating"
                    value="half"
                  />
                  <label
                    class="half"
                    for="starhalf"
                    title="Sucks big time - 0.5 stars"
                  ></label>
                </fieldset>
              
                
                <div className="line-1"></div>
                <button
                  className="h-h1"
                  onClick={() => props.favourates(card.Id)}
                >
                  <span className="text">Favourate</span>

                  <i className="icon ri-check-line ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      class="bi bi-check"
                      viewBox="0 0 9 10"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </i>
                </button>

                
                <div className="line-1"></div>
              </p>
              <button
                className="det "
                onClick={() => props.setProducts(card.Id)}
              >
                Details
              </button>
              <button
                className="det "
                onClick={() => props.addToCart(card.Id)}
              >
                AddCart
              </button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;

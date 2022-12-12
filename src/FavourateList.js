import React from 'react'
import Card from "react-bootstrap/Card";

const FavourateList = (props) => {
  return (
    <div>
<div className=" rounded row mx-5 m-5 ">
          {props.favourates.map((card) => (
            <div className="col m-4 p-1 rounded  " key={card.Title}>
              <Card className="inner" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card.URL} />
                <Card.Body>
                  <Card.Title className="bg-light">{card.Title}</Card.Title>
                  <Card.Text>{card.Text}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
              
    </div>
  )
}

export default FavourateList
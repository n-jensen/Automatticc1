import React, { useState } from "react";
import "./display.css";
import { Link } from "react-router-dom";

function Display(props) {
  console.log(props);

  return (
    <div className="archil">
      <div className="cards">
        <Link to={`/inventory/${props.id}`}>
          <img
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="carimage"
          />
        </Link>
        <div className="container">
          <h3>
            Make: {props.make} Model: {props.model} Year: {props.year}
          </h3>
          <p>
            Price$: {props.price} Mileage: {props.mileage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Display;

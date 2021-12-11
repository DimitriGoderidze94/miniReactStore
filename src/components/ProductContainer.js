import React, { useState } from "react";

const ProductContainer = (props) => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };
  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="productCard" category={props.category}>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.name} />
      <br />
      <div className="boxContainer">
        <span className="box">price {props.price} $</span>
        <button className="box" onClick={increment}>
          +
        </button>
        <span className="box">{number} unit</span>
        <button className="box" onClick={decrement}>
          -
        </button>
        <br />
        <button id={props.id} onClick={props.click}>
          view
        </button>
        <span className="box">
          total price {Math.round(props.price * number * 100) / 100} $
        </span>
      </div>
    </div>
  );
};

export default ProductContainer;

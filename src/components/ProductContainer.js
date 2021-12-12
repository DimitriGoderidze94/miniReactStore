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
        <span className="box">&nbsp; Price {props.price} $ &nbsp;</span>
        <button className="box" onClick={increment}>
          +
        </button>
        <span className="box">&nbsp; {number} Unit &nbsp;</span>
        <button className="box" onClick={decrement}>
          -
        </button>
        <br />

        <span className="box">
          &nbsp; Total Price {Math.round(props.price * number * 100) / 100} $
          &nbsp;
        </span>
        <br />
        <br />
        <span className="box">&nbsp; Rating {props.rate} </span>
        <span className="box">&nbsp; Rate Count {props.ratecount} &nbsp;</span>
      </div>
      <button className="box" id={props.id} onClick={props.click}>
        &nbsp; View &nbsp;
      </button>
      <button onClick={() => alert("Please try later")} className="box">
        Buy
      </button>
    </div>
  );
};

export default ProductContainer;

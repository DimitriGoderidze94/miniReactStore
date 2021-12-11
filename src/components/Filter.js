import React from "react";

const Filter = (props) => {
  return (
    <div id="filter">
      <select
        id="selectFilter"
        onChange={(e) => {
          props.maxprice(e.target.value);
        }}
      >
        <option>10000</option>
        <option>2000</option>
        <option>1000</option>
        <option>300</option>
        <option>100</option>
        <option>50</option>
        <option>30</option>
        <option>20</option>
      </select>
      <label htmlFor="selectFilter">Choose maximum price</label>
    </div>
  );
};

export default Filter;

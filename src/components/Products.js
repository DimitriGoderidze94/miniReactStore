import React, { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";
import ReactDOM from "react-dom";
import info1 from "../info1";
import info from "../info";
import Filter from "./Filter";

const Products = (props) => {
  // var mainUrl = "https://fakestoreapi.com/products";

  const [category, setCategory] = useState("electronics");
  const [item, setItem] = useState("1");

  const [maxPrice, setMaxPrice] = useState(10000);

  const renderer = () => {
    if (item > 2) {
      setItem(item - 1);
    } else {
      setItem(item + 1);
    }
  };

  useEffect(() => {
    // const fetchData = async (props) => {
    //   try {
    // const response = await fetch(mainUrl + "/categories");
    // const json = await response.json();

    const json = info1;

    const categoryList = json.map((categories) => (
      <button key={categories}>{categories}</button>
    ));

    // const responseList = await fetch(mainUrl + "/category/" + category);
    // const jsonlist = await responseList.json();

    const jsonlist = info.filter(
      (object) => object.category === category && object.price <= maxPrice
    );

    ReactDOM.render(categoryList, document.getElementById("products"));

    const productList = jsonlist.map((category1) => (
      <ProductContainer
        img={category1["image"]}
        category={category}
        key={category1["id"]}
        id={category1["id"]}
        title={category1["title"]}
        price={category1["price"]}
        click={() => {
          ReactDOM.render(
            <div id="fullInfo">
              <ProductContainer
                img={category1["image"]}
                category={category}
                id={category1["id"]}
                key={category1["title"]}
                title={category1["title"]}
                price={category1["price"]}
              />
            </div>,
            document.getElementById("wrapper")
          );
        }}
      />
    ));
    ReactDOM.render(productList, document.getElementById("wrapper"));
    // } catch (error) {
    //   console.log("error", error);
    // }
    // };

    // fetchData();
  }, [category, item, maxPrice]);
  return (
    <div>
      <div
        id="products"
        onClick={(e) => {
          setCategory(e.target.innerHTML);
          renderer();
        }}
      ></div>
      <Filter maxprice={setMaxPrice} />
      <section id="wrapper"></section>
    </div>
  );
};

export default Products;

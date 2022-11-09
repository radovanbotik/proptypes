import React from "react";
import Product from "./Product";
import useFetch from "./useFetch";

const url = "https://course-api.com/react-store-products";
export default function index() {
  const { data } = useFetch(url);
  const products = data.map(entry => {
    return <Product key={entry.id} {...entry} />;
  });
  return (
    <div>
      <h2>Products</h2>
      {products}
    </div>
  );
}

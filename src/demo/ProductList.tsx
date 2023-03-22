import { useState } from "react";
import "./ProductList.css";

interface Props {
  items: string[];
  heading: string;
}

const ProductList = ({ items, heading }: Props) => {
  // let items = ["Card", "Mug" , "Flower"]

  return (
    <>
      <h3>{heading}</h3>
      {items.length === 0 && <p> No item found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={"list-group-item"} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;

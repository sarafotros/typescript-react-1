import { useState } from "react";
import "./ProductList.css";

interface Props {
  heading: string;
  items: string[];
  //  onSelectItem: (item: string) => void;
}

const ListGroup = ({ heading, items }: Props) => {
  
  const arr = useState(""); // this component can have state/data that will change over time
  arr[0]; // variable (state of cmpnt)
  arr[1]; // updater function to update the variable -> reacte get notfied -> re-render cmpnt -> DOM update

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

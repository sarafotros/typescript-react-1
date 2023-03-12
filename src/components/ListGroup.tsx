import React, { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem}: Props) => {
  const listItem = ["London", "paris", "New York", "Sydney"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const clickHandler = () => {
  //     setSelectedItem(selctedIndex)
  //   };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {listItem.map((list, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={list}
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(list)
            }}
          >
            {list}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

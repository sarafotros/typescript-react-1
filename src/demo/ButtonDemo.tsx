import React, { useState } from "react";

const ButtonDemo = () => {
  //[false, "Greetz"] states stored somewhere in memory
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("Greetz");

  const handleClick = () => {
    setIsVisible(true);
    setName("Moonpig");
    console.log(isVisible);
    console.log(name);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default ButtonDemo;

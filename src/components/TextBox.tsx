import React, { useState } from "react";

interface Props {
  children: string;
  maxShow: number;
}

const TextBox = ({ children, maxShow }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxShow) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxShow);
  const handleShow = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <p>
      {text}...
      <button onClick={handleShow}>{isExpanded ? "Less" : "More"}</button>
    </p>
  );
};

export default TextBox;

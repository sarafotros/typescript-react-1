import React, { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [expand, setExand] = useState(false);

  if(children.length  <= maxChar) return <p>{children}</p>;

  const text = expand ? children : children.substring(0, maxChar);
  return <p>{text}...<button onClick={()=>setExand(!expand)}>{expand ? 'Less': 'More'}</button></p>;
};

export default ExpandableText;
